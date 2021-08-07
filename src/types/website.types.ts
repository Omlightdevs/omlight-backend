export interface IWebsiteProps{
    websiteName: string
    logo: string
    description: string
    contact: {
        type: string
        name: string
        phone:string
    }[]
    shopAddress: string
    brands: {
        title:string
    }[]
}