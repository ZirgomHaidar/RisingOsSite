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
        <div className="inline-flex flex-col text-4xl font-medium tracking-wider md:text-5xl lg:text-6xl xl:text-6xl">
          <p className="textGradientMain">
            looking for not the <br />
            average custom rom
            <br />
            experience?
          </p>
        </div>
        <div className="inline-flex flex-col items-center text-xl font-light leading-tight lg:text-2xl">
          <p className="textGradientsmall">
            unlock a huge range of customisations while still maintaining
            <br className="hidden sm:block" /> your sanity
          </p>
        </div>
        <div className="relative space-x-6">
          <Link
            href="/download"
            className="inline-flex gap-6 rounded-full border border-slate-700/40 bg-white bg-opacity-0 px-8 py-6 transition-colors duration-200 hover:bg-opacity-5 sm:gap-12 md:px-14 md:py-7 md:text-2xl"
          >
            meet rising oS
            <Image
              src={arrowicon}
              className="z-10 w-9 sm:w-12"
              alt="arrowicon"
            />
          </Link>
          <div className="a15gradient absolute right-[-3rem] top-12 rotate-[-12deg] rounded-full px-6 py-3 text-xl text-black sm:right-[-6rem] sm:top-16 sm:px-14 sm:text-3xl">
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
