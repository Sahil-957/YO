import React from "react";
import { User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

function Input({ children, icon: Icon }) {
  const { authUser, isUpdatingProfile, UpdateProfile } = useAuthStore();

  return (
    <div>
      <div className="text-sm text-zinc-400 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {children.description}
      </div>
      <div className="mt-2">
        <input
          placeholder={children.placeholder}
          className="px-4 py-2.5 bg-base-200 rounded-lg border w-[100%]"
          id={children.id}
          type={children.type}
          value={authUser?.fullName}
        ></input>
      </div>
    </div>
  );
}

export default Input;
