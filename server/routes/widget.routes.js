const widgetController = require('../controllers/widget.controller');


module.exports = (app) => {
    app.get("/api/widgets",widgetController.index);
    app.post("/api/create/widget",widgetController.create);
    app.get("/api/widget/:id",widgetController.show);
    app.put("/api/update/widget/:id",widgetController.update);
    app.delete("/api/destroy/widget/:id",widgetController.destroy);
    app.get("/api/random/widget",widgetController.random)
}