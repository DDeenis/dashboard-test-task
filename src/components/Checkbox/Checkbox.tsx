import clsx from "clsx";
import React, { useState } from "react";
import "./Checkbox.css";

type Props = {
  checked?: boolean;
  onChange?: (val: boolean) => void;
};

export const Checkbox = ({ checked, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    onChange?.(Boolean(isChecked));
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative">
      <input
        type="checkbox"
        className="checkbox-input"
        onChange={handleChange}
      />
      <span
        className={clsx("checkbox", {
          checkbox__active: isChecked,
        })}
        aria-hidden="true"
      />
    </label>
  );
};
