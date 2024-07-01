"use client";

import { redirect, useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../lib/firebase";
import Typewriter from "@/app/(form)/Typewriter";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/ui/link-button";

interface HomePageProps {
  email?: string;
}

export default function HomePage({email}: HomePageProps) {
  const texts = ["forms.", "websites.", "surveys."];
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-10">
      <h2 className="h-16 lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
        It&rsquo;s not just about creating <Typewriter text={texts} className="text-primary underline"></Typewriter>
      </h2>
      {email}
      <div className="space-x-7">
        <LinkButton href="/dashboard" size="home">Dashboard</LinkButton>
        <Button variant="outline" size="home">Demo</Button>
      </div>
    </div>
  );
}