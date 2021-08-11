import Mongoose from "mongoose";
import { IWebsiteProps } from "types";

type Websites = IWebsiteProps & Mongoose.Document;

const websiteSchema = new Mongoose.Schema(
  {
    websiteName: { type: Mongoose.Schema.Types.String, required: true },
    logo: { type: Mongoose.Schema.Types.String, required: true },
    description: { type: Mongoose.Schema.Types.String, required: true },
    phoneNumberOne: { type: Mongoose.Schema.Types.String, required: true },
    phoneNumberTwo: { type: Mongoose.Schema.Types.String, required: true },
    instagramLink: { type: Mongoose.Schema.Types.String, required: true },
    facebookLink: { type: Mongoose.Schema.Types.String, required: true },
    shopAddress: { type: Mongoose.Schema.Types.String, required: true },
  },
  {
    timestamps: true,
  }
);

export const WebsiteDetails = Mongoose.model<Websites>(
  "Website",
  websiteSchema
);
