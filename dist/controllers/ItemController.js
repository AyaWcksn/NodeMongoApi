"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const mongoose = require("mongoose");
const itemsModel_1 = require("../models/itemsModel");
const Items = mongoose.model('Items', itemsModel_1.itemSchema);
class ItemController {
    addItem(req, res) {
        let newItem = new Items(req.body);
        newItem.save((err, Item) => {
            if (err) {
                res.json(err);
            }
            res.json(Item);
        });
    }
    itemGet(req, res) {
        Items.find({}), (err, item) => {
            if (err) {
                res.json(err);
            }
            res.json(item);
        };
    }
}
exports.ItemController = ItemController;
//# sourceMappingURL=ItemController.js.map