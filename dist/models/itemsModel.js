"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.itemSchema = new Schema({
    name: {
        type: String,
        required: 'Enter name'
    },
    code: {
        type: String,
        required: 'Enter code'
    }
});
//# sourceMappingURL=itemsModel.js.map