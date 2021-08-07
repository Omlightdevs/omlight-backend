import { Request, Response } from "express";
import { Category } from "model";
import { IController, IControllerRoutes } from "types";
import { Ok } from "utils";

export class CategoryController implements IController {
     public routes: IControllerRoutes[] = [];
     constructor() {
          this.routes.push({
               path: "/categories",
               handler: this.getAllCategories,
               method: "GET",
          });
          this.routes.push({
               path: "/category/:id",
               handler: this.getCategoriesById,
               method: "GET",
          });
          this.routes.push({
               path: "/create-category",
               handler: this.createNewCategory,
               method: "POST",
          });
          this.routes.push({
               path: "/update-category/:id",
               handler: this.updatingCategory,
               method: "PUT",
          });
          this.routes.push({
               path: "/delete-category/:id",
               handler: this.deleteCategory,
               method: "DELETE",
          });
     }
     public async getAllCategories(req: Request, res: Response) {
          try {
               const categories = await Category.find().sort({ _id: 1 });
               return Ok(res, { categories: categories });
          } catch (err) {
               return err;
          }
     }

     public async getCategoriesById(req: Request, res: Response) {
          try {
               const category = await Category.findById({
                    _id: req.params.id,
               });
               return Ok(res, category);
          } catch (err) {
               return err;
          }
     }

     public async createNewCategory(req: Request, res: Response) {
          try {
               const { image, name, description } = req.body;
               new Category({
                    name: name,
                    image: image,
                    description: description,
               }).save();
               return Ok(res, { message: "New category record created!" });
          } catch (err) {
               return err;
          }
     }

     public async deleteCategory(req: Request, res: Response) {
          try {
               const category = await Category.deleteOne({
                    _id: req.params.id,
               });
               return Ok(res, { message: `Category deleted! ${category} ` });
          } catch (err) {
               return err;
          }
     }

     public async updatingCategory(req: Request, res: Response) {
          try {
               const { name, image, description } = req.body;
               const category = await Category.updateOne(
                    { _id: req.params.id },
                    {
                         $set: {
                              name: name,
                              image: image,
                              description: description,
                         },
                    }
               );
               return Ok(res, {
                    message: `Category details been updated ${category} `,
               });
          } catch (err) {
               return err;
          }
     }
}
