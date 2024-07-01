"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getToken } from "@/lib/token";

export default function CreateFormButton() {
  const router = useRouter();
  async function onSubmit() {
    const token = await getToken();
    console.log("Hi")
  }
  return (
    <Button onClick={onSubmit}>Create Form</Button>
  );
}