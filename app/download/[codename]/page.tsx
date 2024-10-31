import Image from "next/image"
import rosFullLogo from "@/public/rosFullLogo.svg"
import VerticalAccordion from "@/app/_components/VerticalAccordian"

export default async function page({
  params,
}: {
  params: {
    codename: string
  }
}) {
  const response = await fetch(
    `https://ros-api-2to4.onrender.com/device/${params.codename}`,
    {
      cache: "no-store",
    },
  )
  const device_data = await response.json()

  return (
    <div className="-mb-10 -mt-10 xl:mx-24">
      <div className="relative -mb-28 flex flex-col rounded-[3rem] bg-gradient-to-r from-[#060709] from-30% to-[#1B2126] to-100% pb-28">
        <div className="flex items-center justify-between px-5 py-2 md:px-10 md:py-8">
          <div className="">
            <p className="text-2xl capitalize xl:text-3xl">
              {device_data[0].oem + " " + device_data[0].device}
            </p>
            <p className="text-xl font-extralight xl:text-2xl">
              {params.codename}
            </p>
          </div>
          <Image
            src={rosFullLogo}
            alt="rosbgpurple"
            className="size-32 md:size-fit"
          />
        </div>
      </div>
      <VerticalAccordion device_data={device_data} codename={params.codename} />
    </div>
  )
}
