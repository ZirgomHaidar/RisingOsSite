import { deviceModel } from "@/types/DeviceModel"

export async function fetcheData() {
  const response = await fetch(
    "https://ros-api-98t4.onrender.com/api/v1/device/deviceList",
    {
      cache: "no-store",
    },
  )

  if (!response.ok) {
    throw new Error("Failed to fetch deviceList")
  }
  return response.json()
}

export default async function DeviceDataFetcher({
  children,
}: {
  children: (deviceList: deviceModel[]) => React.ReactNode
}) {
  const deviceList = await fetcheData()
  return children(deviceList)
}
