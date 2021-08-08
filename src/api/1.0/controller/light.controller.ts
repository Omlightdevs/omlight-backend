import { Request, Response } from "express";
import { Lights } from "model";
import { IController, IControllerRoutes } from "types";
import { Ok } from "utils";

export class LightController implements IController {
  public routes: IControllerRoutes[] = [];
  constructor() {
    this.routes.push({
      path: "/lights",
      handler: this.getAllLights,
      method: "GET",
    });
    this.routes.push({
      path: "/light/:id",
      handler: this.getLightById,
      method: "GET",
    });
    this.routes.push({
      path: "/create-lights",
      handler: this.createNewLight,
      method: "POST",
    });
    this.routes.push({
      path: "/update-light/:id",
      handler: this.updatingLights,
      method: "PUT",
    });
    this.routes.push({
      path: "/delete-light/:id",
      handler: this.deleteLight,
      method: "DELETE",
    });
    this.routes.push({
      path: "/lights/:categoryId",
      handler: this.getLightsByCategory,
      method: "GET",
    });
  }

  public async getAllLights(req: Request, res: Response) {
    try {
      const lights = await Lights.find().sort({ _id: -1 });
      return Ok(res, { lights: lights });
    } catch (err) {
      return err;
    }
  }
  public async getLightById(req: Request, res: Response) {
    try {
      const light = await Lights.findById({ _id: req.params.id });
      return Ok(res, light);
    } catch (err) {
      return err;
    }
  }
  public async getLightsByCategory(req: Request, res: Response) {
    try {
      const ligths = await Lights.find({
        category: req.params.categoryId,
      }).sort({ _id: -1 });
      if (ligths) {
        return Ok(res, ligths);
      } else {
        return Ok(res, { lighs: "No lights found!" });
      }
    } catch (err) {
      return err;
    }
  }
  public async createNewLight(req: Request, res: Response) {
    try {
      const { images, title, description, price, category } = req.body;
      new Lights({
        images: images,
        title: title,
        description: description,
        price: price,
        category: category,
      }).save();
      return Ok(res, { message: "New light record created!" });
    } catch (err) {
      return err;
    }
  }
  public async deleteLight(req: Request, res: Response) {
    try {
      const light = await Lights.deleteOne({
        _id: req.params.id,
      });
      return Ok(res, {
        message: `Light have been deleted! ${light} `,
      });
    } catch (err) {
      return err;
    }
  }

  public async updatingLights(req: Request, res: Response) {
    try {
      const { title, price, image, description, active } = req.body;
      const light = await Lights.updateOne(
        { _id: req.params.id },
        {
          $set: {
            image: image,
            title: title,
            description: description,
            price: price,
            active: active,
          },
        }
      );
      return Ok(res, {
        message: `Light details been updated ${light} `,
      });
    } catch (err) {
      return err;
    }
  }
}
