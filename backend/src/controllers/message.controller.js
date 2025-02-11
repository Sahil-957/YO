import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const fillteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(fillteredUsers);
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getmessages = async (req, res) => {
    try {
        const { id:userToChatId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId },
            ]
        })
        
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getmessages", error.message); 
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};

export const sendMessage = async (req, res) => {
    try {
        const { text, image} = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;
        
        let imageUrl ;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        //TOdo: realtime functionallity goes here 
        
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage", error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};