import express from "express"; 
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserForSidebar } from "../controllers/message.controller.js";
import { getmessages } from "../controllers/message.controller.js"; 
import { sendMessage } from "../controllers/message.controller.js";  


const router = express.Router();

router.get("/user", protectRoute , getUserForSidebar);
router.get("/:id", protectRoute , getmessages); 

router.post("/send/:id", protectRoute , sendMessage);

export default router;