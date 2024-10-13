import Image from "next/image"
import aboutbg from "@/public/aboutbg.svg"
import TeamGrid from "../_components/TeamGrid"

export default function page() {
  return (
    <>
      <Image
        src={aboutbg}
        className="absolute z-10 hidden lg:block"
        alt="aboutbg"
      />
      <div className="relative text-center text-2xl md:text-3xl">
        L👀k at our <span className="text-[#A891EB]">talented</span> team,
        driven by innovation and a passion for delivering <br /> exceptional
        features every day!
      </div>
      <div className="-mt-16 space-y-6">
        <span className="text-3xl">Core</span>
        <TeamGrid />
      </div>
      <div className="-mb-6 -mt-14 space-y-6">
        <span className="text-3xl">Management & Design</span>
        <TeamGrid />
      </div>
    </>
  )
}
