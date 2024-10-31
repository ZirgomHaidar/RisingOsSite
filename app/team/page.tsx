import Image from "next/image"
import aboutbg from "@/public/aboutbg.svg"
import TeamGrid from "../_components/TeamGrid"

export default function page() {
  return (
    <>
      <Image
        src={aboutbg}
        className="absolute z-10 hidden lg:block"
        alt="aboutbg"
      />
      <div className="relative text-center text-2xl md:text-3xl">
        L👀k at our <span className="text-[#A891EB]">talented</span> team,
        driven by innovation and a passion for delivering <br /> exceptional
        features every day!
      </div>
      <div className="-mt-16 space-y-6">
        <span className="text-3xl">Core</span>
        <TeamGrid list={Core_List} />
      </div>
      <div className="-mb-6 -mt-14 space-y-6">
        <span className="text-3xl">Management & Design</span>
        <TeamGrid list={Core_List} />
      </div>
    </>
  )
}

const Core_List = [
  {
    name: "Minari Penguin",
    role: "Project Lead",
    github: "https://github.com/minaripenguin",
    profilePic: "https://avatars.githubusercontent.com/minaripenguin",
  },
  {
    name: "Hazama",
    role: "Co Founder",
    github: "https://github.com/Hazama25",
    profilePic: "https://avatars.githubusercontent.com/Hazama25",
  },
  {
    name: "Ayan",
    role: "Lead Designer",
    github: "https://github.com/not-ayan",
    profilePic: "https://avatars.githubusercontent.com/not-ayan",
  },
  {
    name: "Alvin(nivv)",
    role: "Core dev",
    github: "https://github.com/nivlafx",
    profilePic: "https://avatars.githubusercontent.com/nivlafx",
  },
  {
    name: "Lord Itachi",
    role: "Team Manager",
    github: "https://github.com/manidweep",
    profilePic: "https://avatars.githubusercontent.com/manidweep",
  },
  {
    name: "Risen",
    role: "Core dev",
    github: "https://github.com/RisenID",
    profilePic: "https://avatars.githubusercontent.com/RisenID",
  },
  {
    name: "Hydrangea",
    role: "Core dev",
    github: "https://github.com/minaripenguin",
    profilePic: "https://avatars.githubusercontent.com/minaripenguin",
  },
  {
    name: "Vikas",
    role: "Project Lead",
    github: "https://github.com/Vikas-V2",
    profilePic: "https://avatars.githubusercontent.com/Vikas-V2",
  },
  {
    name: "Abhinav (hipexscape)",
    role: "Core Dev",
    github: "https://github.com/hipexscape",
    profilePic: "https://avatars.githubusercontent.com/hipexscape",
  },
  {
    name: "SKetU-l",
    role: "Core Dev",
    github: "https://github.com/SKetU-l",
    profilePic: "https://avatars.githubusercontent.com/SKetU-l",
  },
]
