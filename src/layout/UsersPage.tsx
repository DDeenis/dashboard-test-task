import React from "react";
import { Table } from "../components/Table/Table";
import "./UserPage.css";

export const UsersPage = () => {
  return (
    <Table
      header={
        <div className="mb-12 flex justify-between items-center">
          <span className="font-bold text-lg text-[#252733]">All users</span>
        </div>
      }
    >
      <Table.Row className="table-grid mb-3 font-bold text-sm text-[#9FA2B4]">
        <span>User details</span>
        <span>Company name</span>
        <span>Email</span>
        <span>Distance</span>
      </Table.Row>
      <Table.Row>test</Table.Row>
      <Table.Row>test</Table.Row>
    </Table>
  );
};
