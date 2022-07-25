import React from "react";
import { IconBell, IconSearch } from "../Icons/Icons";

type Props = {
  user: {
    name: string;
    avatar: string;
  };
  hasNotifications?: boolean;
};

export const AppHeader = ({ user, hasNotifications }: Props) => {
  return (
    <header className="w-full flex justify-between items-center mb-14">
      <span className="font-bold text-2xl text-[#252733]">Users</span>
      <div className="flex items-center gap-8">
        <div className="flex gap-6">
          <button className="cursor-pointer">
            <IconSearch />
          </button>
          <button className="relative cursor-pointer">
            <IconBell />
            {hasNotifications && (
              <div className="w-[6px] h-[6px] absolute top-0 right-0 rounded-full bg-[#3751FF]" />
            )}
          </button>
        </div>
        <div className="w-px h-8 bg-[#DFE0EB]"></div>
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-sm text-[#252733]">
            {user.name}
          </span>
          <div className="border-[1.5px] border-[#DFE0EB] rounded-full p-[2px] cursor-pointer">
            <img
              src={user.avatar}
              alt="Avatar"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
