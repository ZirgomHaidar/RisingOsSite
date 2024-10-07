"use client"
import Image from "next/image"
import Link from "next/link"
import risingosLogo from "@/public/risingosLogo.svg"
import { usePathname } from "next/navigation"

export default function Navbar() {
  //   const downloadPath = new RegExp("/download/[A-Za-z]+")
  //   const blogPath = new RegExp("/blog/[A-Za-z]+")
  const currentPath: string = usePathname()
  //   let activeDownload: boolean = downloadPath.test(currentPath)
  //   let activeBlog: boolean = blogPath.test(currentPath)
  return (
    <nav className="z-50 my-7 flex items-center justify-between uppercase">
      <Link href="/">
        <Image src={risingosLogo} className="h-12 w-36" alt="risingosLogo" />
      </Link>
      <ul className="flex gap-14 px-8 py-4">
        <li>
          <Link href="/" className={currentPath === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/team">team</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
      <Link href="/download">
        <div className="w-36 rounded-full bg-[#fff8ef] px-6 py-3 text-black">
          Download
        </div>
      </Link>
    </nav>
  )
}
