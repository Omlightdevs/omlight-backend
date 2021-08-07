import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Users } from "model";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
     const token = req.header("Authorization") as string;
     if (!token) return res.status(400).send("Access deined");
     else {
          if (jwt.verify(token, "jsonwebtoken")) {
               return next();
          }
     }
};

export const resetTokonVerify = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     const token = req.header("Authorization") as string;
     const user = await Users.findOne({ resetToken: token });
     let tokenValid = false;
     if (user) {
          tokenValid = true;
     }

     return next();
};
