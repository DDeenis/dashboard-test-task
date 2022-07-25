import clsx from "clsx";
import React, { useState } from "react";

type ItemProps = {
  title: string;
  value: string;
};

type Props = {
  children: React.ReactNode;
};

type Extentions = {
  Card: typeof Card;
};

export const InfoCards: React.FC<Props> & Extentions = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center gap-8">
      {children}
    </div>
  );
};

const Card: React.FC<ItemProps> = ({ title, value }) => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => setIsHover(true);
  const onBlur = () => setIsHover(false);

  return (
    <div
      className={clsx(
        "border w-full max-w-[252px] px-8 py-6 text-center rounded-lg cursor-pointer transition-colors",
        isHover && "border-[#3751FF]"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
    >
      <p
        className={clsx(
          "font-bold text-lg text-[#9FA2B4] mb-3 transition-colors",
          isHover && "text-[#3751FF]"
        )}
      >
        {title}
      </p>
      <span
        className={clsx(
          "font-bold text-4xl text-[#252733] transition-colors",
          isHover && "text-[#3751FF]"
        )}
      >
        {value}
      </span>
    </div>
  );
};

InfoCards.Card = Card;
