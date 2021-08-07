import {Request,Response} from 'express'
import { WebsiteDetails } from 'model';
import { IController, IControllerRoutes, IWebsiteProps } from "types";
import { Ok } from 'utils';

export class WebsiteController implements IController{
     public routes: IControllerRoutes[] = []
     constructor() {
          this.routes.push({
               path: "/contact-details",
               handler: this.uplodingAllDetails,
               method: "POST",
          })
          this.routes.push({
               path: "/get-contact-details",
               handler: this.getAllDetails,
               method:'POST'
          })
     }
     public async uplodingAllDetails(req: Request, res: Response) {
          const {
               brands,
               contact,
               description,logo,shopAddress,websiteName
          }:IWebsiteProps = req.body
          new WebsiteDetails({
               websiteName: websiteName,
               logo: logo,
               descritption: description,
               contact:contact,
               shopAddress: shopAddress,
               brands:brands
          }).save()
          return Ok(res,{message:"details have been updated"})
     }
     public async getAllDetails(req: Request, res: Response) {
          const data = await WebsiteDetails.find({}).sort({ _id: -1 })
          return Ok(res,data)
     }
}