import Mongoose from "mongoose";
import { ICategoryProps } from "types";

type CategoryTypes = ICategoryProps & Mongoose.Document;

const categorySchema = new Mongoose.Schema(
     {
          image: { type: Mongoose.Schema.Types.String, required: true },
          name: { type: Mongoose.Schema.Types.String, required: true },
          description: { type: Mongoose.Schema.Types.String, required: true },
          active: { type: Mongoose.Schema.Types.Boolean, default: true },
     },
     {
          timestamps: true,
     }
);

export const Category = Mongoose.model<CategoryTypes>(
     "Category",
     categorySchema
);
