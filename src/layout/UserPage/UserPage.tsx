import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/users";

export const UserPage = () => {
  const { id } = useParams();
  const numId = id ? parseInt(id) : 1;
  const user = useUser(numId);

  return (
    <div className="bg-white mt-8 relative">
      <div className="relative mb-20">
        <img
          src="https://i.imgur.com/lYOJbz3.png"
          alt="Overlay"
          className="object-cover w-full max-h-[230px]"
        />
        <img
          src={user?.avatar}
          alt="Avatar"
          className="absolute w-36 h-36 border-4 border-white rounded-full -bottom-16 left-1/2 -translate-x-1/2"
        />
      </div>
      <p className="mb-20 text-center">
        <span className="font-bold text-4xl text-[#252733] block mb-2">
          {user?.name}
        </span>
        <span className="font-bold text-2xl text-[#797A84]">
          {user?.company?.bs}
        </span>
      </p>
      <div className="px-14 pb-28">
        <p className="mb-6">
          <span className="font-bold text-4xl text-black block mb-2">
            Address
          </span>
          <span className="font-medium text-base text-black">
            {user?.address.street}, {user?.address.suite}
            <br />
            {user?.address.city}, {user?.address.zipcode}
          </span>
        </p>
        <p className="mb-6">
          <span className="font-bold text-4xl text-black block mb-2">
            Phone
          </span>
          <span className="font-medium text-base text-black">
            +{user?.phone}
          </span>
        </p>
        <p className="mb-6">
          <span className="font-bold text-4xl text-black block mb-2">
            Website
          </span>
          <a
            href={user?.website}
            target="_blank"
            className="font-medium text-base text-[#3851FF] underline"
            rel="noreferrer"
          >
            {user?.website}
          </a>
        </p>
      </div>
    </div>
  );
};
