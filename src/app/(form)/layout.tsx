import ThemeToggle from "@/app/(form)/dashboard/ThemeToggle";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-w-full min-h-screen overflow-hidden">
      <nav className="flex flex-row px-4 py-4 justify-between border-b border-border">
        <Link href="/" className="text-2xl font-semibold">
          <span className="px-1 text-white rounded-md bg-primary dark:text-black">
            Form
          </span>
          hub
        </Link>
        <ThemeToggle></ThemeToggle>
      </nav>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
