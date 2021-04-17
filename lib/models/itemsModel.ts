import * as mongoose from "mongoose"

const Schema = mongoose.Schema

export const itemSchema = new Schema({
	name: {
		type: String,
		required: 'Enter name'
	},
	code: {
		type: String,
		required: 'Enter code'
	}
})

