import ThemeToggle from "@/app/dashboard/ThemeToggle";

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <nav className="flex flex-row px-4 py-4">
        <h1 className="font-bold text-3xl"><span className="text-white bg-primary rounded-sm px-1">Form</span> Hub</h1>
        <ThemeToggle></ThemeToggle>
      </nav>
      <main className="flex w-full">{children}</main>
    </div>
  )
}