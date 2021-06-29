import { IController, IControllerRoutes } from "types";
import { Ok } from "utils";
import { Request, Response } from "express";

export class HomeController implements IController {
     public routes: IControllerRoutes[] = [];
     constructor() {
          this.routes.push({
               path: "/",
               handler: this.Home,
               method: "GET",
          });
     }
     public async Home(req: Request, res: Response) {
          return Ok(res, "Home is working");
     }
}
