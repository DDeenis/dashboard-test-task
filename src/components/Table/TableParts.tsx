import clsx from "clsx";
import React from "react";

type PropsWithChildren = {
  children: React.ReactNode;
  className?: string;
};

export const TableRow: React.FC<PropsWithChildren> = ({
  children,
  className,
}) => {
  return (
    <>
      <div className={clsx("px-8 w-full", className)}>{children}</div>
      <hr className="text-[#DFE0EB] last:hidden" />
    </>
  );
};
