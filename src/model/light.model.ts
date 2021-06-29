import Mongoose from "mongoose";
import { ILightsProps } from "types";

type LightType = ILightsProps & Mongoose.Document;

const lightSchema = new Mongoose.Schema(
     {
          images: { type: Mongoose.Schema.Types.String, required: true },
          title: { type: Mongoose.Schema.Types.String, required: true },
          description: { type: Mongoose.Schema.Types.String, required: true },
          price: { type: Mongoose.Schema.Types.String },
          category: {
               type: Mongoose.Schema.Types.ObjectId,
               ref: "Category",
               required: true,
          },
          active: { type: Mongoose.Schema.Types.Boolean, default: true },
     },
     {
          timestamps: true,
     }
);

export const Lights = Mongoose.model<LightType>("Light", lightSchema);
