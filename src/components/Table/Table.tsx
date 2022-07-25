import React from "react";
import { TableRow } from "./TableParts";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

type Extentions = {
  Row: typeof TableRow;
};

export const Table: React.FC<Props> & Extentions = ({ children, header }) => {
  return (
    <div className="pt-8 bg-white border border-[#DFE0EB] rounded-lg w-full grid grid-flow-row">
      <div className="px-8">{header}</div>
      {children}
    </div>
  );
};

Table.Row = TableRow;
