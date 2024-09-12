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
    <div className="relative z-30 mt-[-25rem] flex h-[800px] items-center justify-between rounded-3xl p-10">
      <Image src={grainbg} fill alt="grainbg" />
      <motion.div
        style={{ y }}
        className="gradient-change absolute z-50 h-[400px] w-full"
      />
      <motion.div style={{ y }} className="relative">
        <p className="text-8xl">
          <span className="font-bold text-[#918CEC]">THE RISE</span>
          <br /> OF YOUR
          <br /> DROID
        </p>
        <Image
          src={blackbglogo}
          className="rosShadow absolute right-0 top-56 size-40 rounded-full"
          alt="blackbglogo"
        />
      </motion.div>
      <motion.div style={{ y }} className="z-50">
        <Image src={rosbgpurple} alt="rosbgpurple" />
      </motion.div>
    </div>
  )
}
