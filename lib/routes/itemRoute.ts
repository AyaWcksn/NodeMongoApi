import {requese, response} from "express"

export class Routes {
	public routes(app): void {
		app.route('/')
		.get((req, res) => {
			res.status(200).send({
				message: "GET OK"
			})
		})
	}
}
