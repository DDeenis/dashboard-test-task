import React from "react";
import { UserExtended } from "../../api/users";
import { IconMenu } from "../../components/Icons/Icons";
import { Label } from "../../components/Label/Label";

type Props = {
  user: UserExtended;
};

export const UserEntry = ({ user }: Props) => {
  const labelVariant =
    user.distance === "high"
      ? "primary"
      : user.distance === "low"
      ? "secondary"
      : "tertiary";

  return (
    <div className="table-grid py-6 items-center">
      <div className="flex items-center gap-6">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-11 h-11 rounded-full"
        />
        <TextPair title={user.name} subtitle={user.username} />
      </div>
      <TextPair title={user.company.name} subtitle={user.company.bs} />
      <TextPair title={user.email} subtitle={user.website} />
      <Label text={user.distance} variant={labelVariant} />
      <button>
        <IconMenu />
      </button>
    </div>
  );
};

type TextPairProps = {
  title: string;
  subtitle: string;
};

const TextPair = ({ title, subtitle }: TextPairProps) => {
  return (
    <div>
      <p className="font-semibold text-sm text-[#252733] whitespace-nowrap overflow-ellipsis w-full overflow-hidden">
        {title}
      </p>
      <span className="text-xs text-[#C5C7CD] whitespace-nowrap overflow-ellipsis w-full overflow-hidden">
        {subtitle}
      </span>
    </div>
  );
};
