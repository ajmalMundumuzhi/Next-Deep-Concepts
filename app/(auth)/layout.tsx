"use client";

import Link from "next/link"
import "../globals.css"
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register ", href: "/register" },
  { name: "Login ", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({
  children,
} : {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="eng">
      <body>
        <nav>
          { navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link className={isActive ? "text-blue-500": ""} 
              href={link.href} 
              key={link.name}>
                {link.name}
              </Link>
            )
          })}
        </nav>
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