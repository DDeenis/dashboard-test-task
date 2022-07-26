import React, { useState } from "react";
import { ActionTableHeader } from "../../components/ActionsTables/ActionTableHeader";
import { Todo } from "../../components/ActionsTables/Todo/Todo";
import { TodoInput } from "../../components/ActionsTables/Todo/TodoInput";
import { Table } from "../../components/Table/Table";
import { TodoType } from "./types";

const mockTodos: TodoType[] = [
  {
    title: "Finish ticket update",
    priority: "urgent",
    isCompleted: false,
  },
  {
    title: "Create new ticket example",
    priority: "new",
    isCompleted: false,
  },
  {
    title: "Update ticket report",
    priority: "default",
    isCompleted: true,
  },
];

export const TodosTable = () => {
  const [todo, setTodo] = useState<string>();

  return (
    <Table
      header={
        <ActionTableHeader
          title="Tasks"
          subtitle="Today"
          url="/tasks"
          urlText="View all"
        />
      }
    >
      <Table.Row>
        <TodoInput
          value={todo}
          onChange={setTodo}
          placeholder="Create new task"
        />
      </Table.Row>
      {mockTodos.map((t) => (
        <Table.Row key={t.title}>
          <Todo {...t} />
        </Table.Row>
      ))}
    </Table>
  );
};
