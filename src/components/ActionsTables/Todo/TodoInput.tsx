import React from "react";
import "./Todo.css";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  onAdd?: () => void;
};

export const TodoInput = ({ value, placeholder, onChange, onAdd }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(e.target.value);

  return (
    <div className="py-5 grid grid-cols-[1fr_24px] items-center">
      <input
        type="text"
        className="border-none bg-none outline-none w-full placeholder:text-[#C5C7CD] placeholder:font-semibold placeholder:text-sm"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={onAdd} className="add-todo-btn" />
    </div>
  );
};
