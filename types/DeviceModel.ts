export interface deviceModel {
    codename: string
    oem: string
    device: string
    last_updated: number
    version: string
    changelog_url: string
  }

export interface variantDataModel {
    maintainer: string
			oem: string
			device: string
			filename: string
			download: string
			timestamp: number
			md5: string
			sha256: string
			size: number
			version: string
			buildtype: string
			forum: string
			gapps: string
			firmware:string
			modem: string
			bootloader: string
			recovery: string
			paypal: string
			telegram: string
			dt: string
			"common-dt": string
			kernel: string
}

export type variantProps = {
    data: variantDataModel
    codename: string
    title: string
  }

export interface deviceListProps {
    init_deviceList: deviceModel[]
  }

export interface vAccordianProps {
    device_data: variantDataModel[]
    codename: string
  }

export interface teamList {
    name: string
    role: string
    github: string
    profilePic: string
}
