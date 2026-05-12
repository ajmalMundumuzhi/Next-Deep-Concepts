import "../globals.css"

export default function AuthLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body>
      {children}
      <footer>
          <div className="bg-gray-800 text-white p-4 text-center">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
        </footer>
        </body>
    </html>
  )
}