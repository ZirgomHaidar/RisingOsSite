import Image from "next/image"
import dnBG from "@/public/dnBG.png"
import dnButton from "@/public/dnButton.svg"
import Link from "next/link"

export default function page() {
  const codename = "Caiman"
  return (
    <>
      <div className="text-center text-5xl font-medium">
        Get Your <span className="text-[#A891EB]">Rising</span> Now
      </div>
      {/* brand selector */}
      <div className="-mt-16 flex justify-center gap-2">
        <div className="inline-flex h-14 w-36 items-center justify-center rounded-full border-4 border-[#A891EB40]">
          <div className="text-2xl text-[#A891EB90] text-white">Motorola</div>
        </div>
        <div className="inline-flex h-14 w-28 items-center justify-center rounded-full border-4 border-[#A891EB40]">
          <div className="text-2xl text-[#A891EB90] text-white">Asus</div>
        </div>
        <div className="inline-flex h-14 w-32 items-center justify-center rounded-full border-4 border-[#A891EB40]">
          <div className="text-2xl text-[#A891EB90] text-white">Google</div>
        </div>
        <div className="inline-flex h-14 w-36 items-center justify-center rounded-full border-4 border-[#A891EB40]">
          <div className="text-2xl text-[#A891EB90] text-white">OnePlus</div>
        </div>
      </div>
      {/* device grid */}
      <div className="-mt-10 grid gap-8 md:grid-cols-3">
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
