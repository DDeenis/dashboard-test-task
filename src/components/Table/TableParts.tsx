import clsx from "clsx";
import React from "react";

type PropsWithChildren = {
  children: React.ReactNode;
  className?: string;
  hoverHighlight?: boolean;
};

export const TableRow: React.FC<PropsWithChildren> = ({
  children,
  className,
  hoverHighlight,
}) => {
  return (
    <>
      <div
        className={clsx(
          "px-8 w-full",
          className,
          hoverHighlight && "hover:bg-[rgba(55,81,255,0.04)]"
        )}
      >
        {children}
      </div>
      <hr className="text-[#DFE0EB] last:hidden" />
    </>
  );
};
