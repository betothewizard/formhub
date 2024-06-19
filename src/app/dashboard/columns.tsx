"use client"

import { ColumnDef } from "@tanstack/react-table";

type FormRowData = {
  id: string;
  title: string;
  lastOpenedByMe: string;
};

export const columns: ColumnDef<FormRowData>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "lastOpenedByMe",
    header: "Last opened by me",
  },
];