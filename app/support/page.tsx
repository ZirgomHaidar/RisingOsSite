import Accordian from "../_components/Accordian"

export default function page() {
  return (
    <div className="z-30 -my-20 flex rounded-[2rem] bg-[#060505]">
      <div className="inline-flex gap-10">
        {/* left */}
        <div className="flex flex-col gap-6 rounded-[2rem] bg-[#131313] p-6">
          {/* first red box */}
          <div className="inline-flex grow rounded-3xl border-2 border-dashed border-[#ff0000] px-10 py-6">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-semibold">
                Before installation...
              </div>
              <div className="warning text-xl font-light">
                After installing the rom, if by any means your device is{" "}
                <span>bricked</span>, your <span>warranty is void</span>, the
                display <span>got RGB</span> or you <span>fry your device</span>
                . The Rising OS team is <span>not at all responsible</span> for
                any cause that happens to your device.
              </div>
            </div>
          </div>
          {/* second box */}
          <div className="inline-flex grow rounded-3xl bg-[#0b0b0b] px-10 py-8">
            <div className="flex flex-col gap-5">
              <div className="text-2xl font-semibold capitalize">
                Installation
              </div>
              <div className="text-xl">
                We recommend the users to join the community of their devices
                because the installation process of every device is different
                because they have different hardware.
              </div>
              <ul className="list-disc pl-8 text-xl font-light">
                <li>The bootloader of your device should be unlocked.</li>
                <li>
                  Your device should have custom recovery installed for ex:
                  TWRP, Orange fox, AOSP (every device have their own custom
                  recovery) using{" "}
                  <span className="font-mono">
                    <br /> fastboot boot &lt;recovery.img&gt;
                  </span>
                </li>
                <li>
                  Now flash the provided .zip of the Rising OS using the custom
                  recovery.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex w-[180%] flex-col py-10 pr-6">
          <p className="mb-8 text-3xl">FAQs</p>
          <div className="space-y-4">
            <Accordian title="What is the base of Rising OS ?" preExpand={true}>
              Why do you care bro. lorem ipsum spam here lorem ipsum dolor
              lalalal whatever the shit it is do your work touch the grass
              ronaldo suuiiii.
            </Accordian>
            <Accordian
              title="What is the base of Rising OS ?"
              preExpand={false}
            >
              Why do you care bro. lorem ipsum spam here lorem ipsum dolor
              lalalal whatever the shit it is do your work touch the grass
              ronaldo suuiiii.
            </Accordian>
            <Accordian
              title="What is the base of Rising OS ?"
              preExpand={false}
            >
              Why do you care bro. lorem ipsum spam here lorem ipsum dolor
              lalalal whatever the shit it is do your work touch the grass
              ronaldo suuiiii.
            </Accordian>
            <Accordian
              title="What is the base of Rising OS ?"
              preExpand={false}
            >
              Why do you care bro. lorem ipsum spam here lorem ipsum dolor
              lalalal whatever the shit it is do your work touch the grass
              ronaldo suuiiii.
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  )
}
