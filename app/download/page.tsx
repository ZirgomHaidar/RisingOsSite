import React from "react"
import DeviceDataFetcher from "../_components/DeviceDataFetcher"
import DownloadList from "../_components/DownloadList"

export default function Page() {
  return (
    <>
      {/* @ts-expect-error - Server Component */}
      <DeviceDataFetcher>
        {(data) => <DownloadList init_deviceList={data} />}
      </DeviceDataFetcher>
    </>
  )
}
