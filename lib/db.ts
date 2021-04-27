import * as mongoose from 'mongoose'
import {itemSchema} from './models/itemsModel'

let db: mongoose.Connection

export const connect = () => {

	const mongoUri = "mongodb+srv://arya:18112002@cluster0.ic7x2.mongodb.net/items?retryWrites=true&w=majority"

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
