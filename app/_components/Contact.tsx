"use client"
import Image from "next/image"
import blackbglogo from "@/public/blackbglogo.svg"
import support from "@/public/support.svg"
import disclaimericon from "@/public/disclaimericon.svg"
import { useState } from "react"

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [popup, setPopup] = useState(false)
  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50"
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setPopup(true)}
        onMouseLeave={() => setPopup(false)}
      >
        <Image src={support} alt="" className="size-14 cursor-pointer" />
      </div>
      {popup && (
        <div className="fixed bottom-24 right-6 z-50 rounded-3xl bg-[#A891EB] p-2 text-black">
          Brother ehhh..!!
        </div>
      )}
      {visible && (
        <div className="fixed inset-0 z-40 bg-gray-900/25 backdrop-blur-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex bg-black">
              <div className="flex w-1/2 flex-col justify-between border px-20 py-24">
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
              <div className="w-1/2 space-y-16 border px-24 py-20">
                <span className="text-4xl">Contact Us</span>
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
                      className="navPill w-52 justify-center"
                    >
                      Submit
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
