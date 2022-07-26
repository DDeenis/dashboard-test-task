import React, { useEffect, useState } from "react";
import { fetchUsersExtended, UserExtended } from "../../api/users";
import { TicketsTable } from "./TicketsTable";
import { TodosTable } from "./TodosTable";
import { UsersTable } from "./UsersTable";
import "./UserPage.css";

export const UsersPage = () => {
  const [users, setUsers] = useState<UserExtended[]>([]);

  useEffect(() => {
    fetchUsersExtended()
      .then((res) => setUsers(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="py-9">
      <UsersTable users={users} />
      <div className="flex gap-8 mt-8">
        <TicketsTable />
        <TodosTable />
      </div>
    </div>
  );
};
