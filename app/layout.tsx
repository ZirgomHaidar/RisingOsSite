import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "./_components/Navbar"
import Footer from "./_components/Footer"
import Contact from "./_components/Contact"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "RisingOS",
  description:
    "At Rising OS, we're constantly striving to improve your user experience. Our team is actively working on adding new features and enhancements every single day!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`mx-4 flex min-h-screen flex-col bg-[#0D0D0D] text-white antialiased xl:mx-10 min-[1700px]:mx-48 ${outfit.className}`}
      >
        <Navbar />
        <div className="mb-14 mt-14 flex-1 lg:mb-20 lg:mt-20 xl:mb-28 xl:mt-28">
          <main className="flex flex-col gap-28">{children}</main>
        </div>
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
