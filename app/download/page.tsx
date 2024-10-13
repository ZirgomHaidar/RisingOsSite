import Image from "next/image"
import dnBG from "@/public/dnBG.png"
import dnButton from "@/public/dnButton.svg"
import Link from "next/link"

export default function page() {
  const codename = "Caiman"
  return (
    <>
      <div className="text-center text-3xl font-medium lg:text-5xl">
        Get Your <span className="text-[#A891EB]">Rising</span> Now
      </div>
      {/* brand selector */}
      <div className="-mt-20 flex flex-wrap justify-center gap-2 sm:-mt-16">
        <div className="rounded-full border-4 border-[#A891EB40] px-6 py-3">
          <div className="lg:text-2xl">Motorola</div>
        </div>
        <div className="rounded-full border-4 border-[#A891EB40] px-6 py-3">
          <div className="lg:text-2xl">Asus</div>
        </div>
        <div className="rounded-full border-4 border-[#A891EB40] px-6 py-3">
          <div className="lg:text-2xl">Google</div>
        </div>
        <div className="rounded-full border-4 border-[#A891EB40] px-6 py-3">
          <div className="lg:text-2xl">OnePlus</div>
        </div>
      </div>
      {/* device grid */}
      <div className="-mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            className="z-20 flex flex-col justify-between rounded-[3rem] bg-[#131313]"
            key={index}
          >
            <Image
              src={dnBG}
              alt="image1"
              className="h-40 rounded-t-[3rem] object-cover"
            />
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xl">
                <h2>Pixel 9 Pro</h2>
                <h5 className="font-thin">Caiman</h5>
              </span>
              <span className="inline-flex gap-2">
                <Link
                  href={`/download/${codename}`}
                  scroll={true}
                  className="rounded-full bg-[#1E1E1E] p-4"
                >
                  <Image src={dnButton} alt="dnbutton" />
                </Link>
                <Link href="" className="rounded-full bg-[#1E1E1E] px-6 py-3">
                  Changelog
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
