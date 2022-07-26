import React from "react";
import {
  IconAward,
  IconBook,
  IconDiagram,
  IconGear,
  IconLightbulb,
  IconLogo,
  IconPeople,
  IconTicket,
  IconUser,
} from "../Icons/Icons";
import { AsideNavGroup } from "./AsideNavGroup";

export const AsideNav = () => {
  return (
    <aside className="min-h-screen max-w-[255px] w-full bg-[#363740] py-[37px]">
      <div className="flex items-center gap-3 mb-16 px-4">
        <div className="w-8 h-8">
          <IconLogo />
        </div>
        <span className="font-bold text-lg text-[#A4A6B3]">Dashboard</span>
      </div>
      <AsideNavGroup>
        <AsideNavGroup.Item icon={<IconDiagram />} url={"/overview"}>
          Overview
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconTicket />} url={"/users"} isActive>
          Users
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconLightbulb />} url={"/ideas"}>
          Ideas
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconPeople />} url={"/contacts"}>
          Contacts
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconUser />} url={"/agents"}>
          Agents
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconBook />} url={"/articles"}>
          Articles
        </AsideNavGroup.Item>
      </AsideNavGroup>
      <hr className="text-[#DFE0EB] opacity-[0.06]" />
      <AsideNavGroup>
        <AsideNavGroup.Item icon={<IconGear />} url={"/settings"}>
          Settings
        </AsideNavGroup.Item>
        <AsideNavGroup.Item icon={<IconAward />} url={"/subscriptions"}>
          Subscription
        </AsideNavGroup.Item>
      </AsideNavGroup>
    </aside>
  );
};
