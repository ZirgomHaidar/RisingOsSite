"use client"
import { Dispatch, SetStateAction, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useWindowSize } from "./useWindowSize"
import Variants from "./Variants"
import { vAccordianProps, variantDataModel } from "@/types/DeviceModel"

const VerticalAccordion = ({ device_data, codename }: vAccordianProps) => {
  const [open, setOpen] = useState(0)

  return (
    <section>
      <div className="flex h-fit w-full flex-col overflow-hidden rounded-[3rem] lg:h-[450px] lg:flex-row">
        {device_data.map((item: variantDataModel, index) => {
          return (
            <Panel
              key={index}
              open={open}
              setOpen={setOpen}
              id={index}
              title={varaintsprops[index].title}
              color={varaintsprops[index].color}
              varaint_data={item}
              codename={codename}
            />
          )
        })}
      </div>
    </section>
  )
}

interface PanelProps {
  open: number
  setOpen: Dispatch<SetStateAction<number>>
  id: number
  title: string
  color: string
  varaint_data: variantDataModel
  codename: string
}

const Panel = ({
  open,
  setOpen,
  id,
  title,
  color,
  varaint_data,
  codename,
}: PanelProps) => {
  const { width } = useWindowSize()
  const isOpen = open === id

  return (
    <>
      <button
        className={`z-20 flex items-center justify-center bg-pink-900 p-4 transition-all delay-[370ms] lg:flex-col`}
        onClick={() => setOpen(id)}
        style={{
          background: color,
        }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden rotate-180 text-xl font-light lg:block"
        >
          {title}
        </span>
        <span className="block text-xl font-light lg:hidden">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className={`z-20 flex overflow-hidden`}
            style={{ background: color }}
          >
            <Variants data={varaint_data} codename={codename} title={title} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordion

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
}

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
}

const varaintsprops = [
  {
    title: "VANILLA",
    color: "#534590",
  },
  {
    title: "CORE",
    color: "#43397F",
  },
  {
    title: "GAPPS",
    color: "#2D2654",
  },
]
