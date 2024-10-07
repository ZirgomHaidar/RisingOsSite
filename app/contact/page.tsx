import Image from "next/image"
import blackbglogo from "@/public/blackbglogo.svg"
import disclaimericon from "@/public/disclaimericon.svg"

export default function page() {
  return (
    <div className="flex">
      <div className="flex w-1/2 flex-col justify-between border py-32 pl-24">
        {/* circular bg */}
        <span className="text-4xl capitalize">
          we&apos;d love to hear <br /> from you! ❤️
        </span>
        <div className="flex flex-col gap-6">
          <Image src={blackbglogo} alt="gh" className="size-40" />
          <span className="flex gap-8">
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
      <div className="w-1/2 space-y-16 border px-24 py-28">
        <span className="text-4xl">Contact Us</span>
        <form
          action=""
          method="post"
          className="contactForm flex flex-col gap-16"
        >
          <div className="flex justify-between">
            <div className="formStyle">
              <label>First Name</label>
              <input type="text" name="name" className="w-64" />
            </div>
            <div className="formStyle">
              <label>Last Name</label>
              <input type="text" name="name" className="w-64" />
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
            <button type="submit" className="navPill mt-20 w-52 justify-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
