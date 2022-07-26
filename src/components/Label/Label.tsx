import clsx from "clsx";
import React from "react";

type Props = {
  text: string;
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Label = ({ text, variant }: Props) => {
  return (
    <div
      className={clsx(
        "text-xs font-bold uppercase px-3 py-2 rounded-full w-max h-max",
        {
          "bg-[#F12B2C]": variant === "primary",
          "bg-[#FEC400]": variant === "secondary",
          "bg-[#29CC97]": variant === "tertiary",
          "bg-[#F0F1F7]": variant === "quaternary",
          "text-[#9FA2B4]": variant === "quaternary",
          "text-white": variant !== "quaternary",
        }
      )}
    >
      {text}
    </div>
  );
};
