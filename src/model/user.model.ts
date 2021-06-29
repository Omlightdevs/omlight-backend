import Mongoose from "mongoose";
import { User } from "types";

type UserTypes = User & Mongoose.Document;

const UserSchema = new Mongoose.Schema(
     {
          email: { type: Mongoose.Schema.Types.String, required: true },
          password: { type: Mongoose.Schema.Types.String, required: true },
          resetToken: { type: Mongoose.Schema.Types.String, required: false },
          admin: { type: Mongoose.Schema.Types.Boolean, default: true },
     },
     {
          timestamps: true,
     }
);

export const Users = Mongoose.model<UserTypes>("User", UserSchema);
