"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Purok = {
  id: string,
  name: string,
  created_at: string,
  updated_at: string,
}

export const columns: ColumnDef<Purok>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "created_at",
    header: "Date Registered",
  },
  {
    accessorKey: "name",
    header: "Purok Name",
  },
  {
    accessorKey: "updated_at",
    header: "Date Registered",
  },
  {
    accessorKey: "updated_at",
    header: "Date Registered",
  },
]