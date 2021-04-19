import * as mongoose from 'mongoose'
import {itemSchema} from './models/itemsModel'

let db: mongoose.Connection

export const connect = () => {

	const mongoUri = "mongodb://localhost/items"

	if (db) {
    return;
  }  

	mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });  

	db = mongoose.connection;  

	db.once("open", async () => {
    console.log("Connected to database");
  });  

	db.on("error", () => {
    console.log("Error connecting to database");
  });

}
