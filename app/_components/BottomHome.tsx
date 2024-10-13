"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import aboutbg from "@/public/aboutbg.svg"
import visualframe from "@/public/visualframe.svg"
import pointer from "@/public/pointer.svg"
import star6 from "@/public/star6.svg"
import arrow15 from "@/public/15arrow.svg"
import send from "@/public/send.svg"
import avatarframe from "@/public/avatarframe.svg"
import rosFullLogo from "@/public/rosFullLogo.svg"

export default function BottomHome() {
  return (
    <div
      className="relative flex flex-col items-center justify-between gap-6 pt-10 lg:mt-40 lg:gap-10 xl:gap-32 xl:py-32"
      id="about"
    >
      <Image
        src={aboutbg}
        fill
        className="absolute z-0 object-cover"
        alt="aboutbg"
      />
      <div className="circular-gradient absolute bottom-[-6rem] left-[-6rem] opacity-5 lg:size-[34rem]" />
      <div className="z-30 flex flex-col justify-between gap-10 lg:flex-row">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-6xl xl:text-8xl">We are Team</p>
            <Image
              src={rosFullLogo}
              className="mb-10 w-[14rem] xl:w-[25rem]"
              alt="rosFullLogo"
            />
          </div>
          <p className="text-xl lg:w-[480px] xl:w-[720px] xl:text-2xl">
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
      <div className="z-10 inline-flex flex-col items-center gap-6 xl:flex-row">
        <div className="inline-flex items-center rounded-[3rem] bg-[#101010] px-6 py-6 md:px-8">
          <div className="relative space-y-6 pr-12 pt-3 sm:space-y-10">
            <div className="flex h-0.5 items-center justify-end gap-10 bg-white/10 sm:w-96 sm:gap-20">
              <div className="size-3 rounded-full bg-[#3d4380] sm:size-6" />
              <div className="size-3 rounded-full bg-[#3d4380] sm:size-6" />
              <div className="size-3 rounded-full bg-[#82ff78] sm:size-6" />
              <div className="size-3 rounded-full bg-[#202020] sm:size-6" />
              <Image
                src={arrow15}
                className="absolute right-1 top-5 w-24 sm:right-3 sm:ml-4 sm:w-32"
                alt="arrow15"
              />
            </div>
            <p className="font-mono text-xs sm:text-base">
              a journey from android 12 to android 15 <br /> hoping to carry
              this words
            </p>
          </div>
          <div className="flex">
            <Image src={star6} alt="star6" className="size-20 sm:size-28" />
          </div>
        </div>
        {/* second box */}
        <div className="flex w-full flex-col gap-4 rounded-[3rem] bg-[#A891EB] px-6 py-6 text-black sm:px-8 xl:w-fit">
          <div className="inline-flex items-center justify-between gap-4">
            <p className="font-semibold sm:text-[1.1rem]">
              An aosp rom with everything you need and <br /> everything you
              want
            </p>
            <div className="flex flex-col justify-between rounded-[2rem] bg-[#1d1d1d] p-5 text-white sm:flex-row sm:gap-5">
              <Image src={send} alt="send" className="" />
              <p className="text-end">
                t.me/ <br /> RisingOSG
              </p>
            </div>
          </div>
          <div className="mt-[-0.2rem] flex items-center gap-4">
            <p className="w-40 items-center rounded-3xl border border-dashed border-black p-2 text-center font-semibold sm:text-xl">
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
