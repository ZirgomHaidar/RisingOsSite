import Image from "next/image"
import image1 from "@/public/image1.png"
import image2 from "@/public/image2.png"
import image3 from "@/public/image3.png"
import image4 from "@/public/image4.png"
import ghicon from "@/public/ghicon.svg"

export default function TeamGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
      {[image1, image2, image3, image4].map((item, index) => (
        <div
          className="z-20 flex flex-col justify-between rounded-[3rem] bg-[#111111]"
          key={index}
        >
          <Image src={item} alt="image1" className="rounded-[3rem]" />
          <div className="flex justify-between px-10 py-6">
            <span className="">
              <h2>minari penguin</h2>
              <h5>project lead</h5>
            </span>
            <Image src={ghicon} alt="gh" />
          </div>
        </div>
      ))}
    </div>
  )
}
