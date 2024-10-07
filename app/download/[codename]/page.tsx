import Image from "next/image"
import dnbanner from "@/public/dnbanner.png"
import avatar from "@/public/avatar.png"
import Link from "next/link"
import rosFullLogo from "@/public/rosFullLogo.svg"
import ghicon from "@/public/ghicon.svg"

export default function page() {
  return (
    <div className="relative mx-32 -mb-20 mt-14 flex flex-col gap-9">
      <div className="z-20 -mt-[6rem] flex items-center justify-between">
        <span className="px-10">
          <p className="text-3xl">Google Pixel 9 Pro</p>
          <p className="text-2xl font-thin">Caiman</p>
        </span>
        <Image src={rosFullLogo} alt="rosbgpurple" className="mr-12" />
      </div>
      <Image
        src={dnbanner}
        alt="dnbg"
        className="absolute -mt-36 w-full rounded-t-[2rem] object-cover"
        fill
      />

      <div className="z-40 inline-flex flex-col rounded-[2rem] bg-[#060505] px-10 py-11">
        <div className="inline-flex gap-20">
          <div className="flex flex-grow flex-col justify-between py-6">
            <div className="flex flex-col">
              <div className="text-xl text-[#999999]">Security patch</div>
              <div className="text-3xl text-white">5 September 2024</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl text-[#999999]">Build date</div>
              <div className="text-3xl text-white">9 September 2024</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl text-[#999999]">Version</div>
              <div className="text-3xl text-white">5.2 (Lyonesse)</div>
            </div>
          </div>
          <div className="flex grow flex-col gap-6">
            <div className="inline-flex items-center justify-between rounded-2xl bg-[#212121] px-6 py-3">
              <div className="flex items-center gap-4">
                <Image
                  className="size-18 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
                <span className="text-3xl font-medium text-white">
                  Mohammad Kibria
                </span>
              </div>
              <div className="inline-flex gap-4">
                <Image
                  className="size-14 rounded-full"
                  src={avatar}
                  alt="tgico"
                />
                <Image
                  className="size-14 rounded-full"
                  src={ghicon}
                  alt="ghico"
                />
              </div>
            </div>
            <div className="inline-flex items-center justify-between rounded-2xl bg-[#212121] px-6 py-5">
              <div className="flex flex-col">
                <p className="text-3xl text-white">Notes:</p>
                <ul className="text-xl text-white">
                  <li>Search YouTube and tell me how to install lol.</li>
                  <li>
                    This devices is manufactured my Gugle. <br />
                    <br />
                  </li>
                </ul>
              </div>
            </div>
            <div className="inline-flex items-center gap-4 text-2xl">
              <p className="w-40 grow border border-[#484848]"></p>
              <Image
                className="size-14 rounded-full"
                src={avatar}
                alt="tgico"
              />
              <Image
                className="size-14 rounded-full"
                src={ghicon}
                alt="ghico"
              />
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-6 rounded-full bg-[#8175C1] px-8 py-3.5"
              >
                <p>Get The Build</p>
                <Image
                  className="size-10 rounded-full"
                  src={avatar}
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
