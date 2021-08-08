import Mongoose from "mongoose";
import { IContactFormProps } from "types";

type ContactTypes = IContactFormProps & Mongoose.Document

const ContactSchema = new Mongoose.Schema({
    name: { type: Mongoose.Schema.Types.String, required: true },
    phoneNumber: { type: Mongoose.Schema.Types.String, required: true },
    email: { type: Mongoose.Schema.Types.String },
    message:{type:Mongoose.Schema.Types.String,required:true}
}, {
    timestamps:true
})

export const Contact = Mongoose.model<ContactTypes>('Contact',ContactSchema)