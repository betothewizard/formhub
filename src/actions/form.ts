"use server"

import { db } from "@/lib/firebase";
import { getToken, tokens, userId } from "@/lib/token";
import { doc, setDoc } from "firebase/firestore";

export async function getStatistics() {
  
}

export async function createForm() {
  const ref = doc(db, "users", (await getToken())?.decodedToken.uid!);
  setDoc(ref, {title: "Untitled", createdAt: new Date()})
  return userId;
}

export async function getFormById(id: number) {
  return 
}