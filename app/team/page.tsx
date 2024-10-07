import Image from "next/image"
import image1 from "@/public/image1.png"
import image2 from "@/public/image2.png"
import image3 from "@/public/image3.png"
import image4 from "@/public/image4.png"
import aboutbg from "@/public/aboutbg.svg"
import ghicon from "@/public/ghicon.svg"
// we make an

export default function page() {
  return (
    <>
      <div className="relative text-center text-3xl">
        <Image src={aboutbg} className="absolute z-10 -mt-16" alt="aboutbg" />
        L👀k at our <span className="text-[#A891EB]">talented</span> team,
        driven by innovation and a passion for delivering <br /> exceptional
        features every day!
      </div>
      <div className="space-y-6">
        <span className="text-3xl">Core</span>
        <div className="grid gap-20 md:grid-cols-4">
          {[image1, image2, image3, image4].map((item, index) => (
            <div
              className="z-20 flex size-80 flex-col justify-between rounded-[3rem] bg-[#111111]"
              key={index}
            >
              <Image src={item} alt="image1" className="rounded-[3rem]" />
              <div className="flex justify-between px-10 pb-8">
                <span className="">
                  <h2>minari penguin</h2>
                  <h5>project lead</h5>
                </span>
                <Image src={ghicon} alt="gh" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-mt-14 space-y-6">
        <span className="text-3xl">Management & Design</span>
        <div className="z-20 grid gap-20 md:grid-cols-4">
          {[image1, image2, image3, image4].map((item, index) => (
            <div
              className="z-20 flex size-80 flex-col justify-between rounded-[3rem] bg-[#111111]"
              key={index}
            >
              <Image src={item} alt="image1" className="rounded-[3rem]" />
              <div className="flex justify-between px-10 pb-8">
                <span className="">
                  <h2>minari penguin</h2>
                  <h5>project lead</h5>
                </span>
                <Image src={ghicon} alt="gh" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
