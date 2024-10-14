import Image from "next/image"
import rosFullLogo from "@/public/rosFullLogo.svg"
import Link from "next/link"
import disclaimericon from "@/public/disclaimericon.svg"
import privacyicon from "@/public/privacyicon.svg"
import communityicon from "@/public/communityicon.svg"
import updatesicon from "@/public/updatesicon.svg"

export default function Footer() {
  return (
    <div className="z-40 my-3 flex items-center justify-between gap-4 sm:my-0 sm:py-4">
      <div className="text-md inline-flex flex-col justify-center gap-1 sm:text-lg">
        <Link href="#">
          <Image src={rosFullLogo} width="160" alt="rosFullLogo" />
        </Link>
        <div className="text-wrap">
          <p>
            Open Source AOSP-based <br className="block sm:hidden" /> Custom ROM
          </p>
          <p>&copy; 2022-2024</p>
        </div>
      </div>
      <div className="rounded-[2.25rem] bg-[#0b0b0b] p-4 md:p-5 xl:p-10">
        <div className="grid grid-cols-2 gap-2 xl:flex xl:grid-cols-none xl:gap-6">
          <Link href="#">
            <div className="navPill">
              <Image src={disclaimericon} alt="disclaimericon" />
              <p>Disclaimer</p>
            </div>
          </Link>
          <div className="navPill">
            <Image src={privacyicon} alt="privacyicon" />
            <p>Privacy</p>
          </div>
          <div className="navPill">
            <Image src={communityicon} alt="communityicon" />
            <p>Community</p>
          </div>
          <div className="navPill">
            <Image src={updatesicon} alt="updatesicon" />
            <p>Updates</p>
          </div>
        </div>
      </div>
    </div>
  )
}
