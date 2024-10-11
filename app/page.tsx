import Image from "next/image"
import Link from "next/link"
import arrowicon from "@/public/arrow.svg"
import HomePageTransition from "./_components/HomePageTransition"
import MiddleHome from "./_components/MiddleHome"
import BottomHome from "./_components/BottomHome"

export default function Home() {
  return (
    <>
      <div className="TOP flex flex-col items-center justify-center space-y-11 text-center capitalize">
        <div className="inline-flex flex-col text-6xl leading-tight">
          <p className="textGradientMain">
            looking for not the <br />
            average custom rom
            <br />
            experience?
          </p>
        </div>
        <div className="inline-flex flex-col items-center text-2xl font-light leading-tight">
          <p className="textGradientsmall">
            unlock a huge range of customisations while still maintaining
            <br />
            your sanity
          </p>
        </div>
        <div className="relative space-x-6">
          <Link
            href="/download"
            className="inline-flex gap-12 rounded-full border border-slate-700/25 px-14 py-7"
          >
            <p className="text-2xl">meet rising oS</p>
            <Image src={arrowicon} className="z-10 w-12" alt="arrowicon" />
          </Link>
          <div className="a15gradient absolute right-[-6rem] top-16 rotate-[-12deg] rounded-full px-14 py-3 text-3xl text-black">
            Android 15?
          </div>
        </div>
      </div>
      <HomePageTransition />
      <MiddleHome />
      <BottomHome />
    </>
  )
}
