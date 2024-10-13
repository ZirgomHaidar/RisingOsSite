"use client"
import Image from "next/image"
import blackbglogo from "@/public/blackbglogo.svg"
import rosbgpurple from "@/public/rosbgpurple.svg"
import grainbg from "@/public/grainbg.svg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function MiddleHome() {
  // hardcoded scoll value needs to be calculated
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.4], [480, 0])
  return (
    <div className="relative z-20 mt-[-25rem] flex h-[800px] items-center justify-between rounded-3xl p-10">
      <Image src={grainbg} fill alt="grainbg" className="hidden lg:block" />
      <motion.div
        style={{ y }}
        className="gradient-change absolute z-20 lg:h-[400px] lg:w-full"
      />
      <motion.div style={{ y }} className="relative hidden lg:block">
        <p className="text-6xl xl:text-7xl 2xl:text-8xl">
          <span className="font-bold text-[#918CEC]">THE RISE</span>
          <br /> OF YOUR
          <br /> DROID
        </p>
        <Image
          src={blackbglogo}
          className="rosShadow absolute right-0 top-36 size-40 rounded-full xl:top-44"
          alt="blackbglogo"
        />
      </motion.div>
      <motion.div style={{ y }} className="z-20 hidden lg:block">
        <Image
          src={rosbgpurple}
          alt="rosbgpurple"
          className="size-64 xl:size-80 2xl:size-full"
        />
      </motion.div>
    </div>
  )
}
