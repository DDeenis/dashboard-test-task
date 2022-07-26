import React from "react";
import { UserExtended } from "../../api/users";
import { IconSort } from "../../components/Icons/Icons";
import { Table } from "../../components/Table/Table";
import { UserEntry } from "./UserEntry";

type Props = {
  users: UserExtended[];
};

export const UsersTable = ({ users }: Props) => {
  return (
    <Table
      header={
        <div className="mb-12 flex justify-between items-center">
          <span className="font-bold text-lg text-[#252733]">All users</span>
          <button className="cursor-pointer flex gap-2 items-center">
            <IconSort />
            <span className="font-semibold text-sm text-[#4B506D]">Sort</span>
          </button>
        </div>
      }
    >
      <Table.Row className="table-grid mb-3 font-bold text-sm text-[#9FA2B4]">
        <span>User details</span>
        <span>Company name</span>
        <span>Email</span>
        <span>Distance</span>
      </Table.Row>
      <Table.Row>
        {users.map((u) => {
          return <UserEntry user={u} key={u.id} />;
        })}
      </Table.Row>
    </Table>
  );
};
