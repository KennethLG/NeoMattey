"use strict";
exports.__esModule = true;
exports.router = void 0;
var path_1 = require("path");
var router = function (app) {
    app.get("*", function (req, res, next) {
        try {
            console.log(path_1["default"].resolve(__dirname, "index.html"));
            res.send("xd");
        }
        catch (e) {
            console.error(e);
            next(e);
        }
    });
};
exports.router = router;
