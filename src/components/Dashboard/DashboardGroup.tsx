import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type Extensions = {
  Item: typeof DashboardItem;
};

export const DashboardGroup: React.FC<Props> & Extensions = ({ children }) => {
  return (
    <nav>
      <ul className="flex flex-col my-4 list-none">{children}</ul>
    </nav>
  );
};

type ItemProps = {
  icon: JSX.Element;
  url: string;
  isActive?: boolean;
  children: string;
};

const DashboardItem: React.FC<ItemProps> = ({
  icon,
  url,
  isActive,
  children,
}) => {
  const [isHover, setHover] = useState(false);

  const onHover = () => setHover(true);
  const onBlur = () => setHover(false);

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

DashboardGroup.Item = DashboardItem;
