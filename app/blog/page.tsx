import Image from "next/image"
import blogbg from "@/public/blogbg.png"
import blackbglogo from "@/public/blackbglogo.svg"

export default function page() {
  return (
    <>
      <div className="relative -mt-10 text-center text-3xl">
        we write stuff here sometimes.......
      </div>
      <div className="-mb-8 -mt-12 grid gap-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:-mt-4 xl:gap-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            className="z-20 flex flex-col justify-between rounded-[2rem] bg-[#0A0A0A]"
            key={index}
          >
            <Image src={blogbg} alt="image1" className="rounded-[2rem]" />
            <div className="flex justify-between px-7 py-6">
              <span className="">
                <h2 className="text-lg font-bold tracking-wider md:text-xl">
                  A15 Release
                </h2>
                <h5 className="sm:text-xs md:text-xl lg:text-lg">
                  Check Out this blog!!!
                </h5>
              </span>
              <Image
                src={blackbglogo}
                alt="gh"
                className="size-12 sm:size-11 md:size-14"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
