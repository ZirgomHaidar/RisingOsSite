import Image from "next/image"
import tgico from "@/public/tgicon.svg"
import dnArrow from "@/public/dnArrow.svg"
import gallaryico from "@/public/gallery.svg"
import oldBuildsico from "@/public/oldBuilds.svg"
import Link from "next/link"
import ghicon from "@/public/ghicon.svg"
import { variantProps } from "@/types/DeviceModel"

const Variants: React.FC<variantProps> = ({ data, codename, title }) => {
  return (
    <div className="flex grow">
      <div className="flex grow flex-col justify-between gap-6 px-10 py-8 lg:flex-row">
        <div className="inline-flex flex-col justify-between gap-3 pl-5 sm:py-10 sm:pl-0">
          <div className="">
            <div className="text-xl text-[#9A9A9A] xl:text-xl">
              Security patch
            </div>
            <div className="text-nowrap text-2xl text-white xl:text-3xl">
              5 September 2024
            </div>
          </div>
          <div className="">
            <div className="text-xl text-[#9A9A9A] xl:text-xl">Build date</div>
            <div className="text-nowrap text-2xl text-white xl:text-3xl">
              {new Date(data.timestamp * 1000).toString().slice(0, 24)}
            </div>
          </div>
          <div className="">
            <div className="text-xl text-[#9A9A9A] xl:text-xl">Version</div>
            <div className="text-nowrap text-2xl text-white xl:text-3xl">
              {data.version}
            </div>
          </div>
        </div>
        <div className="-mx-8 flex flex-col justify-between rounded-[2rem] border-4 border-white/20 p-6 sm:-mx-3">
          <div className="inline-flex flex-col items-center justify-between gap-4 rounded-2xl px-2 sm:flex-row xl:flex-row">
            <div className="inline-flex items-center gap-4">
              <Image
                className="rounded-full"
                src={`https://avatars.githubusercontent.com/${data.maintainer}`}
                width={56}
                height={56}
                alt="avatar"
              />
              <span className="text-3xl font-medium text-white">
                {data.maintainer}
              </span>
            </div>
            <div className="inline-flex gap-4">
              <Link href={data.telegram}>
                <Image
                  className="size-14 rounded-full"
                  src={tgico}
                  alt="tgico"
                />
              </Link>
              <Link href={`https://github.com/${data.maintainer}`}>
                <Image
                  className="size-14 rounded-full"
                  src={ghicon}
                  alt="ghico"
                />
              </Link>
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
            <Link
              href={`https://sourceforge.net/projects/risingos-official/files/5.x/${title}/${codename}`}
              className="size-14 rounded-full bg-[#8175C1] p-3"
            >
              <Image className="" src={oldBuildsico} alt="oldBuildsico" />
            </Link>
            <Link
              href="https://t.me/RisingOS_news"
              className="size-14 rounded-full bg-[#8175C1] p-3"
            >
              <Image className="" src={gallaryico} alt="gallaryico" />
            </Link>
            <Link
              href={data.download}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#8175C1] px-4 py-3.5 text-lg sm:gap-6 sm:px-8 sm:text-xl"
            >
              <p className="">Get The Build</p>
              <Image
                className="size-4 duration-300 ease-in-out group-hover:rotate-45 sm:size-fit"
                src={dnArrow}
                alt="tgico"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Variants
