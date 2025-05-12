"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  const isActiveLink = (href: string) =>
    pathname === href || (pathname.startsWith(href) && pathname !== "/");

  return (
    <div className="flex flex-col items-left min-h-screen">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <nav className="mb-4">
        <ul className="flex space-x-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                className={`mr-4 ${
                  isActiveLink(href) ? "font-bold" : "text-blue-500"
                }`}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}
