const express = require('express')
const monk = require('monk')
const Joi = require('@hapi/joi')

const db = monk(process.env.MONGO_URI)
const items = db.get('items')

const itemSchema = Joi.object({
	name: Joi.string().trim().required(),
	code: Joi.string().trim().required(),
})

const router = express.Router()

router.get('/', async (req, res, next) => {
	try {
		const item = await items.find({})
		res.json(item)
	} catch (e) {
		next(e)
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const {id} = req.params
		const item = await items.findOne({
			_id: id,
		})
		if (!item) return next()
		return res.json(item)
	} catch (e) {
		next(e)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const data = await itemSchema.validateAsync(req.body)
		const insert = await items.insert(data)
		res.json(data)

	} catch (e) {
		next(e)
	}
})

module.exports = router
