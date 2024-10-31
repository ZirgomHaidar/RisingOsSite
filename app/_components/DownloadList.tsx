"use client"
import Image from "next/image"
import dnBG from "@/public/dnBG.png"
import dnButton from "@/public/dnButton.svg"
import Link from "next/link"
import React, { useState } from "react"
import { deviceListProps, deviceModel } from "@/types/DeviceModel"

export default function DownloadList({ init_deviceList }: deviceListProps) {
  const [data] = useState<deviceModel[]>(init_deviceList)
  const [brand, setBrand] = useState("all")
  const [searchText, setSearchText] = useState("")

  const brands: string[] = Array.from(new Set(data.map((device) => device.oem)))

  const filteredDevices = data.filter((device) => {
    const matchesBrand = brand === "all" || device.oem === brand
    const searchableText = [device.oem, device.device, device.codename]
      .join(" ")
      .toLowerCase()
    const matchesSearch = searchableText.includes(searchText.toLowerCase())
    return matchesBrand && matchesSearch
  })

  return (
    <>
      <div className="text-center text-3xl font-medium lg:text-5xl">
        Get Your <span className="text-[#A891EB]">Rising</span> Now
      </div>
      {/* Input element */}
      <div className="-mt-16 flex justify-center px-4 text-base lg:text-xl">
        <div className="relative w-full max-w-[700px]">
          {/* Glassmorphism input */}
          <input
            type="text"
            placeholder="Search by device name or codename..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-3 placeholder-gray-500 backdrop-blur-md transition-all duration-300 hover:border-white/30 focus:border-[#A891EB]/50 focus:outline-none"
          />
          {/* Clear button */}
          {searchText && (
            <button
              onClick={() => setSearchText("")}
              className="absolute right-4 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/5 hover:text-gray-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* brand selector */}
      <div className="-mt-20 flex flex-wrap justify-center gap-2 *:rounded-full *:border-4 *:border-[#A891EB40] *:px-6 *:py-3 *:capitalize sm:-mt-16 lg:text-2xl">
        <button
          onClick={() => setBrand("all")}
          className={`backdrop-blur-lg transition-colors duration-200 ${brand === "all" ? "bg-[#A891EB80] text-gray-300" : "hover:bg-[#A891EB20]"}`}
        >
          <div>All</div>
        </button>
        {brands.map((brandName: string, index) => (
          <button
            key={index}
            onClick={() => setBrand(brandName)}
            className={`backdrop-blur-lg transition-colors duration-200 ${
              brand === brandName
                ? "bg-[#A891EB80] text-gray-300"
                : "hover:bg-[#A891EB20]"
            }`}
          >
            <div>{brandName}</div>
          </button>
        ))}
      </div>
      {/* device grid */}
      <div className="-mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredDevices.length > 0 ? (
          filteredDevices.map((device: deviceModel, index: number) => (
            <div
              className="z-20 flex flex-col justify-between rounded-[3rem] bg-[#131313]"
              key={index}
            >
              <Image
                src={dnBG}
                alt="image1"
                className="h-40 rounded-t-[3rem] object-cover"
              />
              <div className="flex items-center justify-between px-6 py-5">
                <span className="w-32 text-wrap text-xl lg:w-48">
                  <h2>{device.oem + " " + device.device}</h2>
                  <h5 className="font-extralight">{device.codename}</h5>
                </span>
                <span className="inline-flex gap-2">
                  <Link
                    href={`/download/${device.codename}`}
                    scroll={true}
                    className="inline-flex rounded-full bg-[#1E1E1E] p-4"
                  >
                    <Image src={dnButton} alt="dnbutton" className="" />
                  </Link>
                  <Link
                    href={device.changelog_url}
                    className="rounded-full bg-[#1E1E1E] px-6 py-3"
                  >
                    Changelog
                  </Link>
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No devices found matching your search
          </div>
        )}
      </div>
      {/* Results count */}
      <div className="-mt-10 text-center text-gray-500">
        Showing {filteredDevices.length} of {data.length} devices
      </div>
    </>
  )
}
