"use client"
import Image from "next/image"
import Link from "next/link"
import risingosLogo from "@/public/risingosLogo.svg"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const downloadPath = new RegExp("/download/[A-Za-z]+")
  //   const blogPath = new RegExp("/blog/[A-Za-z]+")
  const currentPath: string = usePathname()
  //   console.log(currentPath)
  const activeDownload: boolean = downloadPath.test(currentPath)
  //   const activeBlog: boolean = blogPath.test(currentPath)
  return (
    <nav className="z-40 my-7 flex items-center justify-between uppercase">
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
          <Link
            href="/team"
            className={currentPath === "/team" ? "active" : ""}
          >
            team
          </Link>
        </li>
        <li>
          <Link href="/#about">about</Link>
        </li>
        <li>
          <Link
            href="/support"
            className={currentPath === "/support" ? "active" : ""}
          >
            support
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={currentPath === "/blog" ? "active" : ""}
          >
            blog
          </Link>
        </li>
      </ul>
      <Link href="/download" scroll={true}>
        <div
          className={cn(
            "w-36 rounded-full bg-[#fff8ef] px-6 py-3 text-black duration-200 hover:bg-[#A891EB]",
            {
              "bg-[#A891EB]": activeDownload || currentPath === "/download",
            },
          )}
        >
          Download
        </div>
      </Link>
    </nav>
  )
}
