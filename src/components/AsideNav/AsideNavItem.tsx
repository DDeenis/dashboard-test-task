import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type ItemProps = {
  icon: JSX.Element;
  url: string;
  isActive?: boolean;
  children: string;
};

export const AsideNavItem: React.FC<ItemProps> = ({
  icon,
  url,
  isActive,
  children,
}) => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => setIsHover(true);
  const onBlur = () => setIsHover(false);

  return (
    <li
      className={clsx(
        "hover:bg-[#9FA2B4]",
        isActive && "border-l-4 border-[#DDE2FF] bg-[#9FA2B4]"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
    >
      <Link to={url}>
        <div className="py-5 px-4 flex items-center gap-6">
          <div
            className={clsx("w-4 h-4 flex items-center", {
              "icon-active": isActive || isHover,
            })}
          >
            {icon}
          </div>
          <span
            className={clsx("text-base text-[#A4A6B3]", {
              "text-[#DDE2FF]": isActive || isHover,
            })}
          >
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
};
