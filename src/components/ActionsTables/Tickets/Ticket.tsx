import React from "react";

type Props = {
  title: string;
  count: number;
};

export const Ticket = ({ title, count: id }: Props) => {
  return (
    <div className="flex justify-between items-center font-semibold text-sm py-5">
      <span className="text-[#252733]">{title}</span>
      <span className="text-[#9FA2B4]">{id}</span>
    </div>
  );
};
