import Mongoose  from 'mongoose'
import { IWebsiteProps } from 'types'

type Websites = IWebsiteProps & Mongoose.Document

const websiteSchema = new Mongoose.Schema({
    websiteName: { type: Mongoose.Schema.Types.String, required: true },
    logo: { type: Mongoose.Schema.Types.String, required: true },
    Description: { type: Mongoose.Schema.Types.String, required: true },
    contact: {
        type: { type: Mongoose.Schema.Types.String, required:true },
        name: { type: Mongoose.Schema.Types.String, required: true },
        phone:{type:Mongoose.Schema.Types.String,required:true}
    },
    shopAddress: { type: Mongoose.Schema.Types.String, required: true },
    brands: {
        title:{type:Mongoose.Schema.Types.String,required:true}
    }
}, {
    timestamps:true
})

export const WebsiteDetails = Mongoose.model<Websites>('Website',websiteSchema)