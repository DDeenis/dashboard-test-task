import clsx from "clsx";
import React from "react";

type Props = {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
};

export const Label = ({ text, variant }: Props) => {
  return (
    <div
      className={clsx(
        "text-xs text-white font-bold uppercase px-3 py-2 rounded-full w-max h-max",
        {
          "bg-[#F12B2C]": variant === "primary",
          "bg-[#FEC400]": variant === "secondary",
          "bg-[#29CC97]": variant === "tertiary",
        }
      )}
    >
      {text}
    </div>
  );
};
