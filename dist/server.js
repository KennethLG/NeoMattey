/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => /* binding */ config\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_0___default().config();\r\nvar config = {\r\n    port: process.env.PORT || 4000,\r\n    dbUser: process.env.DB_USER,\r\n    dbName: process.env.DB_NAME,\r\n    dbPsw: process.env.DB_PSW,\r\n    dbHost: process.env.DB_HOST,\r\n    email: process.env.EMAIL,\r\n    emailPsw: process.env.EMAIL_PASSWORD,\r\n    emailTo: process.env.EMAIL_TO\r\n};\r\n\n\n//# sourceURL=webpack://mattey/./src/server/config.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/apis */ \"./src/server/routes/apis.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ \"./src/server/config.ts\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"dist\"));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n(0,_routes_apis__WEBPACK_IMPORTED_MODULE_2__.videosApi)(app, router);\r\napp.get(\"*\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        try {\r\n            res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, \"index.html\"));\r\n        }\r\n        catch (e) {\r\n            console.error(e);\r\n            next(e);\r\n        }\r\n        return [2];\r\n    });\r\n}); });\r\napp.listen(_config__WEBPACK_IMPORTED_MODULE_3__.config.port, function () {\r\n    console.log(\"Server started on port \" + _config__WEBPACK_IMPORTED_MODULE_3__.config.port);\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\r\n\n\n//# sourceURL=webpack://mattey/./src/server/index.ts?");

/***/ }),

/***/ "./src/server/lib/mongodb.ts":
/*!***********************************!*\
  !*** ./src/server/lib/mongodb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MongoLib\": () => /* binding */ MongoLib\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/server/config.ts\");\n\r\n\r\nvar MONGO_URI = \"mongodb+srv://\" + _config__WEBPACK_IMPORTED_MODULE_1__.config.dbUser + \":\" + _config__WEBPACK_IMPORTED_MODULE_1__.config.dbPsw + _config__WEBPACK_IMPORTED_MODULE_1__.config.dbHost + \"/\" + _config__WEBPACK_IMPORTED_MODULE_1__.config.dbName + \"?retryWrites=true&w=majority\";\r\nvar MongoLib = (function () {\r\n    function MongoLib() {\r\n        this.client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGO_URI, {\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true\r\n        });\r\n        this.dbName = _config__WEBPACK_IMPORTED_MODULE_1__.config.dbName;\r\n    }\r\n    MongoLib.prototype.connect = function () {\r\n        var _this = this;\r\n        if (!this.connection) {\r\n            this.connection = new Promise(function (resolve, reject) {\r\n                _this.client.connect(function (err) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    console.log(\"Connected to database\");\r\n                    resolve(_this.client.db(_this.dbName));\r\n                });\r\n            });\r\n        }\r\n        return this.connection;\r\n    };\r\n    MongoLib.prototype.getAll = function (collection, query) {\r\n        return this.connect().then(function (db) {\r\n            return db.collection(collection).find(query).toArray();\r\n        });\r\n    };\r\n    MongoLib.prototype.getNewVideos = function (collection) {\r\n        return this.connect().then(function (db) {\r\n            return db.collection(collection).find({}).toArray();\r\n        });\r\n    };\r\n    return MongoLib;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://mattey/./src/server/lib/mongodb.ts?");

/***/ }),

/***/ "./src/server/lib/nodemailer.ts":
/*!**************************************!*\
  !*** ./src/server/lib/nodemailer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nodemailer\": () => /* binding */ Nodemailer\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/server/config.ts\");\n\r\n\r\nvar Nodemailer = (function () {\r\n    function Nodemailer() {\r\n    }\r\n    Nodemailer.prototype.send = function (data) {\r\n        var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\r\n            service: \"gmail\",\r\n            auth: {\r\n                user: _config__WEBPACK_IMPORTED_MODULE_1__.config.email,\r\n                pass: _config__WEBPACK_IMPORTED_MODULE_1__.config.emailPsw\r\n            }\r\n        });\r\n        var mailOptions = {\r\n            from: _config__WEBPACK_IMPORTED_MODULE_1__.config.email,\r\n            to: _config__WEBPACK_IMPORTED_MODULE_1__.config.emailTo,\r\n            subject: data.email + \"'s email!!\",\r\n            text: data.text\r\n        };\r\n        transporter.sendMail(mailOptions, function (err, data) {\r\n            if (err) {\r\n                console.log(err);\r\n            }\r\n            else {\r\n                console.log(\"email sent\");\r\n            }\r\n        });\r\n    };\r\n    return Nodemailer;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://mattey/./src/server/lib/nodemailer.ts?");

/***/ }),

/***/ "./src/server/routes/apis.ts":
/*!***********************************!*\
  !*** ./src/server/routes/apis.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"videosApi\": () => /* binding */ videosApi\n/* harmony export */ });\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ \"./src/server/services/services.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar videosApi = function (app, router) {\r\n    app.use(\"/api\", router);\r\n    var videosService = new _services_services__WEBPACK_IMPORTED_MODULE_0__.VideosService();\r\n    var messagesService = new _services_services__WEBPACK_IMPORTED_MODULE_0__.MessagesService();\r\n    router.get(\"/videos\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var tag, videos, e_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    tag = req.query.tag;\r\n                    return [4, videosService.getVideos(tag)];\r\n                case 1:\r\n                    videos = _a.sent();\r\n                    res.status(200).json({\r\n                        data: videos,\r\n                        msg: \"videos listed\"\r\n                    });\r\n                    return [3, 3];\r\n                case 2:\r\n                    e_1 = _a.sent();\r\n                    console.error(e_1);\r\n                    next(e_1);\r\n                    return [3, 3];\r\n                case 3: return [2];\r\n            }\r\n        });\r\n    }); });\r\n    router.get(\"/news\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var videos, e_2;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4, videosService.getVideos()];\r\n                case 1:\r\n                    videos = _a.sent();\r\n                    res.status(200).json({\r\n                        data: [videos[0], videos[1], videos[2], videos[3]],\r\n                        msg: \"new videos listed\"\r\n                    });\r\n                    return [3, 3];\r\n                case 2:\r\n                    e_2 = _a.sent();\r\n                    console.error(e_2);\r\n                    next(e_2);\r\n                    return [3, 3];\r\n                case 3: return [2];\r\n            }\r\n        });\r\n    }); });\r\n    router.post(\"/send\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var data, e_3;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    data = req.body;\r\n                    return [4, messagesService.sendMessage(data)];\r\n                case 1:\r\n                    _a.sent();\r\n                    res.status(200).json({\r\n                        msg: \"sended message\"\r\n                    });\r\n                    return [3, 3];\r\n                case 2:\r\n                    e_3 = _a.sent();\r\n                    console.error(e_3);\r\n                    next(e_3);\r\n                    return [3, 3];\r\n                case 3: return [2];\r\n            }\r\n        });\r\n    }); });\r\n    router.get(\"*\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            try {\r\n                res.status(404).send(\"404 NOT FOUND :(\");\r\n            }\r\n            catch (e) {\r\n                console.error(e);\r\n                next(e);\r\n            }\r\n            return [2];\r\n        });\r\n    }); });\r\n};\r\n\n\n//# sourceURL=webpack://mattey/./src/server/routes/apis.ts?");

/***/ }),

/***/ "./src/server/services/services.ts":
/*!*****************************************!*\
  !*** ./src/server/services/services.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VideosService\": () => /* binding */ VideosService,\n/* harmony export */   \"MessagesService\": () => /* binding */ MessagesService\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mongodb */ \"./src/server/lib/mongodb.ts\");\n/* harmony import */ var _lib_nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/nodemailer */ \"./src/server/lib/nodemailer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar VideosService = (function () {\r\n    function VideosService() {\r\n        this.collection = \"videos\";\r\n        this.mongodbLib = new _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoLib();\r\n    }\r\n    VideosService.prototype.getVideos = function (tag) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var query, videos;\r\n            return __generator(this, function (_a) {\r\n                query = tag ? { tag: { $in: [tag] } } : {};\r\n                videos = this.mongodbLib.getAll(this.collection, query);\r\n                return [2, videos || []];\r\n            });\r\n        });\r\n    };\r\n    return VideosService;\r\n}());\r\n\r\nvar MessagesService = (function () {\r\n    function MessagesService() {\r\n        this.msgLib = new _lib_nodemailer__WEBPACK_IMPORTED_MODULE_1__.Nodemailer();\r\n    }\r\n    MessagesService.prototype.sendMessage = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                this.msgLib.send(data);\r\n                return [2];\r\n            });\r\n        });\r\n    };\r\n    return MessagesService;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://mattey/./src/server/services/services.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://mattey/external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://mattey/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://mattey/external_%22express%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = require(\"mongodb\");;\n\n//# sourceURL=webpack://mattey/external_%22mongodb%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = require(\"nodemailer\");;\n\n//# sourceURL=webpack://mattey/external_%22nodemailer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://mattey/external_%22path%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/server/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;