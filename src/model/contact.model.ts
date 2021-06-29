import Mongoose from "mongoose";
import {} from "types";
import { IContactProps } from "types";

type ContactTypes = IContactProps & Mongoose.Document;

const contactSchema = new Mongoose.Schema({
     email: { type: Mongoose.Schema.Types.String, required: true },
     contact: { type: Mongoose.Schema.Types.String, required: true },
     address: { type: Mongoose.Schema.Types.String, required: true },
     description: { type: Mongoose.Schema.Types.String, required: true },
     brandName: { type: Mongoose.Schema.Types.Array, required: false },
});

export const Contact = Mongoose.model<ContactTypes>("Contact", contactSchema);
