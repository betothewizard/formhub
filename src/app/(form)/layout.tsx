"use client"

import ThemeToggle from "@/app/(form)/ThemeToggle";
import { Button } from "@/components/ui/button";
import { app } from "@/lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function handleLogout() {
    await signOut(getAuth(app));

    await fetch("/api/logout");

    router.push("/login");
  }
  return (
    <div className="flex flex-col min-w-full min-h-screen overflow-hidden">
      <nav className="flex flex-row px-4 py-4 justify-between border-b border-border">
        <Link href="/" className="text-2xl font-semibold">
          <span className="px-1 text-white rounded-md bg-primary dark:text-black">
            Form
          </span>
          hub
        </Link>
        <div className="flex gap-4">
        <ThemeToggle></ThemeToggle>
        <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
