"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ItemController_1 = require("../controllers/ItemController");
class Routes {
    routes(app) {
        const itemController = new ItemController_1.ItemController();
        app.route('/');
        app.route('/:id')
            .get((req, res) => {
            res.status(200).send({
                message: "GET One data"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=itemRoute.js.map