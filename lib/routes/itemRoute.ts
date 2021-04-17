import {Request, Response} from "express"
import {ItemController} from "../controllers/ItemController"


export class Routes {
	public routes(app): void {
	const itemController: ItemController = new ItemController()
		app.route('/')
		app.route('/:id')
		.get((req: Request,res: Response) => {
			res.status(200).send({
				message: "GET One data"
			})
		})
	}
}
