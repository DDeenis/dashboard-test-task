import React from "react";
import { Checkbox } from "../../Checkbox/Checkbox";
import { Label } from "../../Label/Label";

type Props = {
  title: string;
  priority: "urgent" | "new" | "default";
  isCompleted: boolean;
  onToggle?: (val: boolean) => void;
};

export const Todo = ({ title, priority, isCompleted, onToggle }: Props) => {
  const labelVariant =
    priority === "urgent"
      ? "secondary"
      : priority === "new"
      ? "tertiary"
      : "quaternary";

  return (
    <div className="py-5 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Checkbox checked={isCompleted} onChange={onToggle} />
        <span className="font-semibold text-sm text-[#252733]">{title}</span>
      </div>
      <Label text={priority} variant={labelVariant} />
    </div>
  );
};
