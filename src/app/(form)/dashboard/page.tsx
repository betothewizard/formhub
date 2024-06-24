import DataTable from "@/app/(form)/dashboard/DataTable";
import { columns } from "@/app/(form)/dashboard/columns";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Recent forms</h1>
      <FormRow></FormRow>
    </div>
  );
}

function FormRow() {
  return (
    <DataTable columns={columns} data={[{id: 1, title: "Form 1", lastOpenedByMe: "9:00AM"}]}/>
  )
} 