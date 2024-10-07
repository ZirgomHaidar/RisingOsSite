import Image from "next/image"
import blogbg from "@/public/blogbg.png"
import blackbglogo from "@/public/blackbglogo.svg"

export default function page() {
  return (
    <>
      <div className="relative -mt-10 text-center text-3xl">
        we write stuff here sometimes.......
      </div>
      <div className="-mb-16 -mt-12 grid gap-3 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            className="z-20 flex flex-col justify-between rounded-[2rem] bg-[#0A0A0A]"
            key={index}
          >
            <Image src={blogbg} alt="image1" className="rounded-[2rem]" />
            <div className="flex justify-between px-10 py-6">
              <span className="text-xl">
                <h2 className="font-bold tracking-wider">A 15 Release</h2>
                <h5 className="">Check Out this blog!!!</h5>
              </span>
              <Image src={blackbglogo} alt="gh" className="size-14" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
