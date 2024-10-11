"use client"
import Image from "next/image"
import visual from "@/public/visual.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HomePageTransition() {
  const gradientRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.85, 0.85])
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 480])
  const scaleX = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  return (
    <motion.div
      className="left-0 right-0 z-40 flex items-center justify-center"
      style={{ scale, y }}
    >
      <Image src={visual} className="z-20 w-[360px]" alt="visual" />
      <motion.div
        ref={gradientRef}
        className="circular-gradient absolute size-[34rem]"
        style={{ scaleX }}
      />
    </motion.div>
  )
}
