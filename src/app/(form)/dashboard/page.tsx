"use client"

import { createForm } from "@/actions/form";
import DataTable from "@/app/(form)/dashboard/DataTable";
import { columns } from "@/app/(form)/dashboard/columns";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { getToken, userId } from "@/lib/token";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getTokens } from "next-firebase-auth-edge";
import CreateFormButton from "@/app/(form)/dashboard/CreateFormButton";


export default function Dashboard() {
  return (
    <div className="container">
      <h1>Recent forms</h1>
      <FormRow></FormRow>
    </div>
  );
}

function FormRow() {
  const onSubmit = async () => {
    const formId = await createForm();
  }
  return (
    <>
      {" "}
      <DataTable
        columns={columns}
        data={[{ id: 1, title: "Form 1", lastOpenedByMe: "9:00AM" }]}
      />
    <CreateFormButton/>
    </>
  );
}
