import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/itemRoute";
import * as mongoose from "mongoose";
import { config as dotenv } from "dotenv"
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.routePrv.routes(this.app);
    this.mongoSetup();
		dotenv()
		this.plugin()
  }
	protected plugin(): void {
		this.app.use(bodyParser.json())
		this.app.use(morgan("dev"))
		this.app.use(compression())
		this.app.use(cors())
		this.app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
	}
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private mongoSetup(): void {
    mongoose.Promise;
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  }
}

export default new App().app;
