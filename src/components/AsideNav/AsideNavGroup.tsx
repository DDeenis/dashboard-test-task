import React from "react";
import { AsideNavItem } from "./AsideNavItem";

type Props = {
  children: React.ReactNode;
};

type Extensions = {
  Item: typeof AsideNavItem;
};

export const AsideNavGroup: React.FC<Props> & Extensions = ({ children }) => {
  return (
    <nav>
      <ul className="flex flex-col my-4 list-none">{children}</ul>
    </nav>
  );
};

AsideNavGroup.Item = AsideNavItem;
