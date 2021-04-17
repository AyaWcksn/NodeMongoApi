import * as mongoose from 'mongoose'
import {itemSchema} from '../models/itemsModel'
import {Request, Response} from 'express'

const Items = mongoose.model('Items', itemSchema)

export class ItemController{

public addItem(req: Request, res: Response)  {
	let newItem = new Items(req.body)
	newItem.save((err, Item) => {
		if(err){
			res.json(err)
		}
		res.json(Item)
	})
}

public itemGet(req: Request, res: Response) {
	Items.find({}), (err, item) => {
		if(err){
			res.json(err)
		}
		res.json(item)
	}
}

}

