import { Request, Response } from "express";
import { WebsiteDetails, Contact } from "model";
import {
  IContactFormProps,
  IController,
  IControllerRoutes,
  IWebsiteProps,
} from "types";
import { Ok } from "utils";

export class WebsiteController implements IController {
  public routes: IControllerRoutes[] = [];
  constructor() {
    this.routes.push({
      path: "/contact-details",
      handler: this.uplodingAllDetails,
      method: "POST",
    });
    this.routes.push({
      path: "/get-contact-details",
      handler: this.getAllDetails,
      method: "POST",
    });
    this.routes.push({
      handler: this.contactAdmin,
      method: "POST",
      path: "/contact",
    });
    this.routes.push({
      handler: this.getCustomers,
      method: "GET",
      path: "/contact",
    });
    this.routes.push({
      path: "/delete-contact-details/:id",
      handler: this.deleteCustomerDetails,
      method: "DELETE",
    });
  }
  public async uplodingAllDetails(req: Request, res: Response) {
    const {
      brands,
      contact,
      description,
      logo,
      shopAddress,
      websiteName,
    }: IWebsiteProps = req.body;
    new WebsiteDetails({
      websiteName: websiteName,
      logo: logo,
      descritption: description,
      contact: contact,
      shopAddress: shopAddress,
      brands: brands,
    }).save();
    return Ok(res, { message: "details have been updated" });
  }

  public async contactAdmin(req: Request, res: Response) {
    const { name, email, phoneNumber, message }: IContactFormProps = req.body;
    new Contact({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    }).save();
    return Ok(res, {
      message: `${name} Thank you very much for contact us! We will react you at very soon`,
    });
  }
  public async getAllDetails(req: Request, res: Response) {
    const data = await WebsiteDetails.find({}).sort({ _id: -1 });
    return Ok(res, data);
  }
  public async getCustomers(req: Request, res: Response) {
    const data = await Contact.find({}).sort({
      _id: 1,
    });
    return Ok(res, data);
  }
  public async deleteCustomerDetails(req: Request, res: Response) {
    await Contact.deleteOne({ _id: req.params.id });
    return Ok(res, {
      message: `Contact details have been deleted successfully`,
    });
  }
}
