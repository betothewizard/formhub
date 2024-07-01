import { notFound } from "next/navigation";
import HomePage from "./HomePage";
import { tokens } from "@/lib/token";

export default function Home() {
  if (!tokens) {
    notFound();
  }

  return (
      <HomePage email={tokens?.decodedToken.uid}/>
  )
}
