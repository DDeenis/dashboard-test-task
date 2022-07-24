import React from "react";
import { IconBook } from "../Icons/IconBook";
import { IconDiagram } from "../Icons/IconDiagram";
import { IconLightbulb } from "../Icons/IconLightbulb";
import { IconLogo } from "../Icons/IconLogo";
import { IconPeople } from "../Icons/IconPeople";
import { IconTicket } from "../Icons/IconTicket";
import { IconUser } from "../Icons/IconUser";
import { DashboardGroup } from "./DashboardGroup";

export const Dashboard = () => {
  return (
    <aside className="min-h-screen max-w-[255px] w-full bg-[#363740] py-[37px]">
      <div className="flex items-center gap-3 mb-16 px-4">
        <div className="w-8 h-8">
          <IconLogo />
        </div>
        <span className="font-bold text-lg text-[#A4A6B3]">Dashboard</span>
      </div>
      <DashboardGroup>
        <DashboardGroup.Item icon={<IconDiagram />} url={"/overview"}>
          Overview
        </DashboardGroup.Item>
        <DashboardGroup.Item icon={<IconTicket />} url={"/users"} isActive>
          Users
        </DashboardGroup.Item>
        <DashboardGroup.Item icon={<IconLightbulb />} url={"/ideas"}>
          Ideas
        </DashboardGroup.Item>
        <DashboardGroup.Item icon={<IconPeople />} url={"/contacts"}>
          Contacts
        </DashboardGroup.Item>
        <DashboardGroup.Item icon={<IconUser />} url={"/agents"}>
          Agents
        </DashboardGroup.Item>
        <DashboardGroup.Item icon={<IconBook />} url={"/articles"}>
          Articles
        </DashboardGroup.Item>
      </DashboardGroup>
    </aside>
  );
};
