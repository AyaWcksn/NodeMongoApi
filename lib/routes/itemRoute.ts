import { Request, Response } from "express";
import { ItemController } from "../controllers/ItemController";

export class Routes {
  public itemController: ItemController = new ItemController();
  public routes(app): void {
    app
      .route("/")
      .get(this.itemController.itemGet)
      .post(this.itemController.addItem);
    app.route("/:id").get(this.itemController.getId);
  }
}
