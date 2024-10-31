"use client"
import Image from "next/image"
import expandIco from "@/public/expandIco.svg"
import { useEffect, useRef, useState } from "react"

type accordianProps = {
  title: string
  children: string
  preExpand?: boolean
}

export default function Accordian({
  title,
  children,
  preExpand,
}: accordianProps) {
  const accRef = useRef<HTMLDivElement>(null)
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
        className="items-center rounded-2xl bg-[#212121] px-6 py-5 sm:text-xl"
        onClick={handleExpanded}
      >
        <div
          className={`flex grow justify-between gap-1 text-xl font-medium sm:text-2xl`}
        >
          {title}
          <Image
            src={expandIco}
            alt="expandIco"
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <div
          className="overflow-y-hidden transition-all duration-[400ms] ease-in-out"
          style={{ height: expanded ? accRef.current?.offsetHeight || 0 : 0 }}
        >
          <div className="pt-3" ref={accRef}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
