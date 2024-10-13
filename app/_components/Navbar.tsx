"use client"
import Image from "next/image"
import Link from "next/link"
import risingosLogo from "@/public/risingosLogo.svg"
import menu from "@/public/menu.svg"
import dnButton from "@/public/dnButtonBlack.svg"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useRef } from "react"

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navRef = useRef<any>()

  const downloadPath = new RegExp("/download/[A-Za-z]+")
  //   const blogPath = new RegExp("/blog/[A-Za-z]+")
  const currentPath: string = usePathname()
  //   console.log(currentPath)
  const activeDownload: boolean = downloadPath.test(currentPath)
  //   const activeBlog: boolean = blogPath.test(currentPath)

  const openMenu = () => {
    navRef.current.style.top = "0px"
  }

  const closeMenu = () => {
    navRef.current.style.top = "-2500px"
  }

  return (
    <nav className="z-40 my-7 flex items-center justify-between uppercase">
      <Link href="/">
        <Image
          src={risingosLogo}
          className="size-12 lg:w-36"
          alt="risingosLogo"
        />
      </Link>
      <div className="flex gap-2 md:hidden">
        <Link
          href="/download"
          scroll={true}
          className={cn(
            "block rounded-full bg-white p-[0.94rem] duration-200",
            {
              "bg-[#A891EB]": activeDownload || currentPath === "/download",
            },
          )}
        >
          <Image src={dnButton} className="lg:w-36" alt="dnButton " />
        </Link>
        <div
          className="block cursor-pointer rounded-full bg-white p-3 sm:block"
          onClick={openMenu}
        >
          <Image src={menu} className="size-6" alt="menu" />
        </div>
      </div>

      <ul
        className="fixed left-0 right-0 top-[-1000px] z-50 flex h-full flex-col items-center justify-center gap-8 px-8 py-4 text-xl backdrop-blur-3xl duration-200 ease-in-out md:static md:flex-row md:justify-normal md:gap-4 md:text-base lg:gap-14"
        ref={navRef}
      >
        <div
          className="absolute right-10 top-10 block cursor-pointer md:hidden"
          onClick={closeMenu}
        >
          ❌
        </div>
        <li>
          <Link
            href="/"
            className={currentPath === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className={currentPath === "/team" ? "active" : ""}
            onClick={closeMenu}
          >
            team
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={closeMenu}>
            about
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className={currentPath === "/support" ? "active" : ""}
            onClick={closeMenu}
          >
            support
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={currentPath === "/blog" ? "active" : ""}
            onClick={closeMenu}
          >
            blog
          </Link>
        </li>
      </ul>
      <Link
        href="/download"
        scroll={true}
        className={cn(
          "hidden rounded-full bg-white p-[0.94rem] duration-200 md:block lg:hidden",
          {
            "bg-[#A891EB]": activeDownload || currentPath === "/download",
          },
        )}
      >
        <Image src={dnButton} className="lg:w-36" alt="dnButton " />
      </Link>
      <Link href="/download" scroll={true} className="hidden lg:block">
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
