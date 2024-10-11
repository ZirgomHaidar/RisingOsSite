import Image from "next/image"
import rosFullLogo from "@/public/rosFullLogo.svg"
import Link from "next/link"
import disclaimericon from "@/public/disclaimericon.svg"

export default function Footer() {
  return (
    <div className="relative flex h-36 items-center justify-between p-10">
      <div className="z-30 inline-flex flex-col justify-center gap-1 text-lg">
        <Link href="#">
          <Image src={rosFullLogo} width="160" alt="rosFullLogo" />
        </Link>
        <div>
          <p>open source AOSP-based custom rom</p>
          <p>&copy; 2022-2024</p>
        </div>
      </div>
      <div className="z-30 rounded-[2.25rem] bg-[#0b0b0b] px-11 py-8">
        <div className="flex gap-11">
          <Link href="#">
            <div className="navPill">
              <Image src={disclaimericon} alt="disclaimericon" />
              <p>Disclaimer</p>
            </div>
          </Link>
          <div className="navPill">
            <Image src={disclaimericon} alt="disclaimericon" />
            <p>Privacy & policy</p>
          </div>
          <div className="navPill">
            <Image src={disclaimericon} alt="disclaimericon" />
            <p>Community</p>
          </div>
          <div className="navPill">
            <Image src={disclaimericon} alt="disclaimericon" />
            <p>Updates</p>
          </div>
        </div>
      </div>
    </div>
  )
}
