"use client"
import Image from "next/image"
import blackbglogo from "@/public/blackbglogo.svg"
import support from "@/public/support.svg"
import dnArrow from "@/public/dnArrow.svg"
import disclaimericon from "@/public/disclaimericon.svg"
import { useState } from "react"

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [popup, setPopup] = useState(false)
  return (
    <>
      <div
        className="fixed bottom-4 right-4 z-30 lg:bottom-8 lg:right-8"
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setPopup(true)}
        onMouseLeave={() => setPopup(false)}
      >
        <Image src={support} alt="" className="size-14 cursor-pointer" />
      </div>
      {popup && (
        <div className="fixed bottom-7 right-20 z-50 rounded-3xl bg-[#A891EB] p-2 text-black">
          Brother ehhh..!!
        </div>
      )}
      {visible && (
        <div className="fixed inset-0 z-40 bg-gray-900/25 backdrop-blur-md">
          <div className="absolute inset-0 mx-6 flex items-center justify-center">
            <div className="relative flex rounded-3xl bg-black">
              <div
                className="absolute right-10 top-10 hidden cursor-pointer lg:block"
                onClick={() => setVisible(!visible)}
              >
                ❌
              </div>
              <div className="hidden w-1/2 flex-col justify-between px-20 py-24 lg:flex">
                {/* circular bg */}
                <span className="text-wrap text-4xl capitalize">
                  we&apos;d love to hear <br /> from you! ❤️
                </span>
                <div className="flex flex-col gap-6">
                  <Image src={blackbglogo} alt="gh" className="size-40" />
                  <span className="flex flex-wrap gap-4">
                    <div className="navPill bg-black/50">
                      <Image src={disclaimericon} alt="disclaimericon" />
                      <p>Support</p>
                    </div>
                    <div className="navPill bg-black/50">
                      <Image src={disclaimericon} alt="disclaimericon" />
                      <p>Updates</p>
                    </div>
                  </span>
                </div>
              </div>
              <div className="space-y-6 px-4 py-6 md:space-y-16 md:px-24 md:py-20 lg:w-1/2">
                <div className="mr-3 flex items-center justify-between">
                  <span className="text-3xl md:text-4xl">Contact Us</span>
                  <div
                    className="block cursor-pointer lg:hidden"
                    onClick={() => setVisible(!visible)}
                  >
                    ❌
                  </div>
                </div>
                <form
                  action=""
                  method="post"
                  className="contactForm flex flex-col gap-8"
                >
                  <div className="flex flex-wrap gap-6">
                    <div className="formStyle">
                      <label>First Name</label>
                      <input type="text" name="name" className="" />
                    </div>
                    <div className="formStyle">
                      <label>Last Name</label>
                      <input type="text" name="name" className="" />
                    </div>
                  </div>

                  <div className="formStyle">
                    <label>Email</label>
                    <input type="text" name="email" />
                  </div>

                  <div className="formStyle">
                    <label>Query</label>
                    <textarea name="message" className="h-16" />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className={
                        "flex items-center gap-6 rounded-full bg-[#121212] py-1 pl-6 pr-1"
                      }
                    >
                      <h5 className="">Submit</h5>
                      <div className="rounded-full bg-black p-4">
                        <Image src={dnArrow} alt="dnArrow" />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
