import { auth } from "middleware";
import { IController, IControllerRoutes } from "types";
import { Request, Response } from "express";
import { Contact } from "model/contact.model";
import { Ok } from "utils";

export class FeaturesController implements IController {
     public routes: IControllerRoutes[] = [];
     constructor() {
          this.routes.push({
               path: "/upload-contact-details",
               method: "POST",
               handler: this.contactDetails,
               middleware: [auth],
          });
          this.routes.push({
               path: "/update-contact-details/:id",
               method: "PUT",
               handler: this.updateContactDetails,
               middleware: [auth],
          });
     }
     public async contactDetails(req: Request, res: Response) {
          try {
               const {
                    logo,
                    sitename,
                    email,
                    address,
                    contact,
                    description,
                    brandName,
               } = req.body;
               new Contact({
                    logo: logo,
                    sitename: sitename,
                    email: email,
                    address: address,
                    contact: contact,
                    description: description,
                    brandName: brandName,
               }).save();
               return Ok(res, "Your new data is setup successfull");
          } catch (err) {
               return err;
          }
     }
     public async updateContactDetails(req: Request, res: Response) {
          try {
               const {
                    logo,
                    sitename,
                    email,
                    address,
                    contact,
                    description,
                    brandName,
               } = req.body;
               const contactDetails = await Contact.updateOne(
                    { _id: req.params.id },
                    {
                         $set: {
                              logo: logo,
                              sitename: sitename,
                              email: email,
                              address: address,
                              contact: contact,
                              description: description,
                              brandName: brandName,
                         },
                    }
               );
               return Ok(
                    res,
                    `Your data is update successfull, ${contactDetails}`
               );
          } catch (err) {
               return err;
          }
     }
}
