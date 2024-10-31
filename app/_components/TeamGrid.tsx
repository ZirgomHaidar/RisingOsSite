import Image from "next/image"
import ghicon from "@/public/ghicon.svg"
import Link from "next/link"
import { teamList } from "@/types/DeviceModel"

interface gridProps {
  list: teamList[]
}

export default function TeamGrid({ list }: gridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
      {list.map((member: teamList, index: number) => (
        <div
          className="z-20 flex flex-col justify-between rounded-[3rem] bg-[#111111]"
          key={index}
        >
          <div className="relative h-[220px]">
            <Image
              src={member.profilePic}
              alt="image1"
              fill
              className="absolute rounded-[3rem] object-cover"
            />
          </div>
          <div className="flex justify-between px-10 py-6">
            <span className="">
              <h2>{member.name}</h2>
              <h5>{member.role}</h5>
            </span>
            <Link href={member.github}>
              <Image src={ghicon} alt="gh" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
