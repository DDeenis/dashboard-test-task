import React from "react";
import { ActionTableHeader } from "../../components/ActionsTables/ActionTableHeader";
import { Ticket } from "../../components/ActionsTables/Tickets/Ticket";
import { Table } from "../../components/Table/Table";

const mockTickets = [
  {
    title: "Waiting on Feature Request",
    count: 4238,
  },
  {
    title: "Awaiting Customer Response",
    count: 1005,
  },
  {
    title: "Awaiting Developer Fix",
    count: 914,
  },
  {
    title: "Pending",
    count: 281,
  },
];

export const TicketsTable = () => {
  return (
    <Table
      header={
        <ActionTableHeader
          title="Unresolved tickets"
          subtitle={
            <>
              <span>Group: </span>
              <span className="text-[#4B506D] font-semibold">Support</span>
            </>
          }
          url="/tickets"
          urlText="View details"
        />
      }
    >
      {mockTickets.map((t) => (
        <Table.Row key={t.title}>
          <Ticket {...t} />
        </Table.Row>
      ))}
    </Table>
  );
};
