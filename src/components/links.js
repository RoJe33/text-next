'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Links() {
    let path = usePathname();
    let link = path === "/settings" ?  <Link href="/login">Login</Link> : <Link href="/settings">Settings</Link>;

  return (
    <div>
        {link}
    </div>
  )
}
