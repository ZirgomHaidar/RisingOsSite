"use client"
import Image from "next/image"
import expandIco from "@/public/expandIco.svg"
import { useEffect, useState } from "react"

type accordianProps = {
  title: string
  children: string
  preExpand: boolean
}

export default function Accordian({
  title,
  children,
  preExpand,
}: accordianProps) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    preExpand ? setExpanded(true) : null
  }, [preExpand])

  function handleExpanded() {
    setExpanded(!expanded)
  }

  return (
    <>
      <div
        className="items-center rounded-2xl bg-[#212121] px-6 py-5 text-xl"
        onClick={handleExpanded}
      >
        <div className={`flex grow justify-between text-2xl font-medium`}>
          {title}
          <Image
            src={expandIco}
            alt="expandIco"
            className={`${expanded ? "rotate-180 transition-transform duration-300" : "rotate-0 transition-transform duration-300"}`}
          />
        </div>
        <div className={`mt-4 font-light ${expanded ? "block" : "hidden"}`}>
          {children}
        </div>
        {/* {expanded && (
        )} */}
      </div>
    </>
  )
}
