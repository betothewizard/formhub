export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex justify-center items-center flex-1">
      {children}
    </div>
  )
}