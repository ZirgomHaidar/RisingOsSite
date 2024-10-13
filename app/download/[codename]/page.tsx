import Image from "next/image"
import avatar from "@/public/avatar.png"
import tgico from "@/public/tgicon.svg"
import dnArrow from "@/public/dnArrow.svg"
import gallaryico from "@/public/gallery.svg"
import oldBuildsico from "@/public/oldBuilds.svg"
import Link from "next/link"
import rosFullLogo from "@/public/rosFullLogo.svg"
import ghicon from "@/public/ghicon.svg"

export default function page() {
  return (
    <div className="relative -mb-10 -mt-8 flex flex-col rounded-[2rem] bg-slate-500 xl:mx-24">
      <div className="flex items-center justify-between px-5 py-2 md:px-10 md:py-8">
        <div className="">
          <p className="text-2xl xl:text-3xl">Google Pixel 9 Pro</p>
          <p className="text-xl font-thin xl:text-2xl">Caiman</p>
        </div>
        <Image
          src={rosFullLogo}
          alt="rosbgpurple"
          className="size-32 md:size-fit"
        />
      </div>

      <div className="inline-flex flex-col rounded-[2rem] bg-[#060505] px-4 py-11 sm:px-10">
        <div className="inline-flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-grow flex-col flex-wrap justify-between gap-3 pl-5 sm:py-6 sm:pl-0">
            <div className="">
              <div className="text-xl text-[#999999] xl:text-xl">
                Security patch
              </div>
              <div className="text-nowrap text-2xl text-white xl:text-3xl">
                5 September 2024
              </div>
            </div>
            <div className="">
              <div className="text-xl text-[#999999] xl:text-xl">
                Build date
              </div>
              <div className="text-nowrap text-2xl text-white xl:text-3xl">
                9 September 2024
              </div>
            </div>
            <div className="">
              <div className="text-xl text-[#999999] xl:text-xl">Version</div>
              <div className="text-nowrap text-2xl text-white xl:text-3xl">
                5.2 (Lyonesse)
              </div>
            </div>
          </div>
          <div className="flex grow flex-col">
            <div className="inline-flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-3 sm:flex-row xl:flex-row">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-medium text-white">
                  John Cena
                </span>
              </div>
              <div className="inline-flex gap-4">
                <Image
                  className="size-18 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
                <Image
                  className="size-14 rounded-full"
                  src={tgico}
                  alt="tgico"
                />
                <Image
                  className="size-14 rounded-full"
                  src={ghicon}
                  alt="ghico"
                />
              </div>
            </div>
            <div className="inline-flex items-center justify-between rounded-2xl px-6 py-5">
              <div className="flex flex-col">
                <p className="text-xl text-white lg:text-3xl">Notes:</p>
                <ul className="list-disc pl-6 text-lg text-white">
                  <li>Search YouTube and tell me how to install lol.</li>
                  <li>
                    This devices is manufactured my Gugle. <br />
                    <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-4 text-2xl lg:justify-end">
              <div className="size-14 rounded-full bg-[#8175C1] p-3">
                <Image className="" src={oldBuildsico} alt="oldBuildsico" />
              </div>
              <div className="size-14 rounded-full bg-[#8175C1] p-3">
                <Image className="" src={gallaryico} alt="gallaryico" />
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8175C1] px-4 py-3.5 text-lg sm:gap-6 sm:px-8 sm:text-xl"
              >
                <p>Get The Build</p>
                <Image
                  className="size-4 sm:size-fit"
                  src={dnArrow}
                  alt="tgico"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
