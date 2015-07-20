//
//
//
//
//

var server, model, view, controller, router;
server = require("./core/server");
model = require("./core/model");
view = require("./core/view");
controller = require("./core/controller");
router = require("./core/router");

server.start(router.route);

