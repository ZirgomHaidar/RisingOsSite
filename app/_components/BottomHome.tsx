"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import aboutbg from "@/public/aboutbg.svg"
import visualframe from "@/public/visualframe.svg"
import pointer from "@/public/pointer.svg"
import star6 from "@/public/star6.svg"
import arrow15 from "@/public/15arrow.svg"
import tg from "@/public/tg.svg"
import avatarframe from "@/public/avatarframe.svg"
import rosFullLogo from "@/public/rosFullLogo.svg"

export default function BottomHome() {
  return (
    <div
      className="relative mt-40 flex h-[990px] flex-col items-center justify-between gap-32 px-16 py-32"
      id="about"
    >
      <Image src={aboutbg} fill className="absolute z-0" alt="aboutbg" />
      <div className="circular-gradient absolute bottom-[-6rem] left-[-6rem] size-[34rem] opacity-5" />
      <div className="z-50 flex justify-between">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-8xl">We are Team</p>
            <Image
              src={rosFullLogo}
              width="400"
              className="mb-10"
              alt="rosFullLogo"
            />
          </div>
          <p className="w-[720px] text-2xl">
            At Rising OS, we&apos;re constantly striving to improve your user
            experience. Our team is actively working on adding new features and
            enhancements every single day! To stay up-to-date on all the latest
            changes, simply visit our changelog page{" "}
            <span className="cursor-pointer text-[#A891EB]">here</span>
          </p>
        </div>
        <div className="relative rounded-[4.5rem] bg-[#101010] px-6 pt-2">
          <Image src={visualframe} alt="visualframe" />
          <motion.div>
            <Image
              src={pointer}
              className="absolute bottom-0 left-0 rotate-45"
              alt="pointer"
            />
          </motion.div>
          <div className="galleryShadow absolute bottom-8 right-8 w-36 rounded-full bg-[#1C1C1C] p-4 text-center text-xl">
            Gallery
          </div>
        </div>
      </div>
      <div className="z-50 inline-flex items-center gap-6">
        <div className="inline-flex h-40 items-center gap-2 rounded-[3rem] bg-[#101010] pl-14 pr-4">
          <div className="space-y-10 pt-6">
            <div className="flex h-0.5 w-96 items-center justify-end gap-20 bg-white/10">
              <div className="size-6 rounded-full bg-[#3d4380]" />
              <div className="size-6 rounded-full bg-[#3d4380]" />
              <div className="size-6 rounded-full bg-[#82ff78]" />
              <div className="size-6 rounded-full bg-[#202020]" />
            </div>
            <p className="font-mono">
              a journey from android 12 to android 15 <br /> hoping to carry
              this words
            </p>
          </div>
          <Image
            src={arrow15}
            className="mb-2 ml-[-6.6rem] mr-[-1rem]"
            alt="arrow15"
          />
          <Image src={star6} alt="star6" />
        </div>
        <div className="h-44 rounded-[3rem] bg-[#A891EB] px-8 py-6 text-black">
          <div className="flex justify-between">
            <p className="pt-2 text-[1.1rem] font-semibold">
              An aosp rom with everything you need and <br /> everything you
              want
            </p>
            <Image src={tg} alt="tg" />
          </div>
          <div className="mt-[-0.2rem] flex items-center gap-4">
            <p className="w-40 items-center rounded-3xl border border-dashed border-black p-2 text-center text-xl font-semibold">
              we &#60;3 you
            </p>
            <Image src={avatarframe} alt="avatarframe" />
            <p className="">10000+ happy users and counting</p>
          </div>
        </div>
      </div>
    </div>
  )
}
