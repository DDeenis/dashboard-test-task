import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle: React.ReactNode;
  url: string;
  urlText: string;
};

export const ActionTableHeader = ({ title, subtitle, url, urlText }: Props) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg text-[#252733]">{title}</span>
        <Link to={url} className="font-semibold text-sm text-[#3751FF]">
          {urlText}
        </Link>
      </div>
      <p className="mt-2 text-xs text-[#9FA2B4]">{subtitle}</p>
    </div>
  );
};
