import React, { useEffect } from "react";
import { fetchUsersExtended } from "../../api/users";
import { TicketsTable } from "./TicketsTable";
import { TodosTable } from "./TodosTable";
import { UsersTable } from "./UsersTable";
import { useRecoilState } from "recoil";
import { usersAtom } from "../../store/users";
import "./UserPage.css";

export const UsersPage = () => {
  const [users, setUsers] = useRecoilState(usersAtom);

  useEffect(() => {
    // fetch only one time
    if (users.length) return;

    fetchUsersExtended()
      .then((res) => setUsers(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="py-9">
      <UsersTable users={users} />
      <div className="flex gap-8 mt-8 flex-wrap lg:flex-nowrap">
        <TicketsTable />
        <TodosTable />
      </div>
    </div>
  );
};
