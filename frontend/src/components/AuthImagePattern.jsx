const AuthImagePattern = ({ title, subtitle }) => {
    const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-orange-500", "bg-purple-500"];
    
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-1 gap-2 mb-8">
        <img
          src="https://cdn.leonardo.ai/users/d2762e96-ee86-4626-8c3f-a482cb0097b2/generations/1bcbb6f5-45a3-485c-b904-870c3aed2011/AlbedoBase_XL_i_want_a_logo_for_YO_with_accents_of_blue_and_bl_3.jpg"
          alt="Auth Pattern"
          className="aspect-square rounded-2xl"
        />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
      </div>
    );
  };
  
  export default AuthImagePattern;