/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./models/Article.ts":
/*!***************************!*\
  !*** ./models/Article.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst schema = new mongoose_1.Schema({\r\n    title: {\r\n        type: String,\r\n        require: true\r\n    },\r\n    size: {\r\n        type: Number\r\n    },\r\n    pages: [\r\n        {\r\n            heading: {\r\n                type: String,\r\n            },\r\n            content: {\r\n                type: String,\r\n            },\r\n            page: {\r\n                type: Number,\r\n            }\r\n        }\r\n    ]\r\n});\r\nconst Article = mongoose_1.model(\"Article\", schema);\r\nexports.default = Article;\r\n\n\n//# sourceURL=webpack://it_in_edu/./models/Article.ts?");

/***/ }),

/***/ "./routes/Article.routes.ts":
/*!**********************************!*\
  !*** ./routes/Article.routes.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst Article_1 = __importDefault(__webpack_require__(/*! ../models/Article */ \"./models/Article.ts\"));\r\nlet router = express_1.Router();\r\nrouter.get(\"/:id/:page\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const id = req.params.id;\r\n    const page = +req.params.page;\r\n    const article = yield Article_1.default.findById(id);\r\n    if (article == null) {\r\n        return;\r\n    }\r\n    res.render(\"article\", {\r\n        article: {\r\n            id,\r\n            page,\r\n            size: article.size,\r\n            heading: article.pages[page - 1].heading,\r\n            content: article.pages[page - 1].content\r\n        }\r\n    });\r\n}));\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://it_in_edu/./routes/Article.routes.ts?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst express_handlebars_1 = __importDefault(__webpack_require__(/*! express-handlebars */ \"express-handlebars\"));\r\nconst Article_routes_1 = __importDefault(__webpack_require__(/*! ../routes/Article.routes */ \"./routes/Article.routes.ts\"));\r\nconst connection_1 = __webpack_require__(/*! ../utils/connection */ \"./utils/connection.ts\");\r\nconnection_1.connect();\r\nlet app = express_1.default();\r\napp.set(\"PORT\", process.env.PORT || 80);\r\napp.set(\"view engine\", \"handlebars\");\r\napp.engine(\"handlebars\", express_handlebars_1.default({\r\n    defaultLayout: \"main.handlebars\",\r\n    helpers: {\r\n        nextArticle: function (id, page, max) {\r\n            ++page;\r\n            if (page > max) {\r\n                page = 1;\r\n            }\r\n            return `/articles/${id}/${page}`;\r\n        },\r\n        prevArticle: function (id, page, max) {\r\n            --page;\r\n            if (page < 1) {\r\n                page = max;\r\n            }\r\n            return `/articles/${id}/${page}`;\r\n        }\r\n    }\r\n}));\r\napp.use(express_1.default.static(\"public\"));\r\napp.get(\"/\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    res.render(\"home\");\r\n}));\r\napp.use(\"/articles\", Article_routes_1.default);\r\napp.listen(app.get(\"PORT\"), () => console.log(`Server ready at port: ${app.get(\"PORT\")}`));\r\n\n\n//# sourceURL=webpack://it_in_edu/./server/index.ts?");

/***/ }),

/***/ "./utils/connection.ts":
/*!*****************************!*\
  !*** ./utils/connection.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.connect = void 0;\r\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nconst connect = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        yield mongoose_1.default.connect(\"mongodb+srv://dima:raptor315@cluster0.3tt9x.mongodb.net/Articles?retryWrites=true&w=majority\", {\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true,\r\n            useFindAndModify: false\r\n        });\r\n        console.log(\"Connected To DB!\");\r\n    }\r\n    catch (e) {\r\n        console.error(e);\r\n        process.exit(1);\r\n    }\r\n});\r\nexports.connect = connect;\r\n\n\n//# sourceURL=webpack://it_in_edu/./utils/connection.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-handlebars":
/*!*************************************!*\
  !*** external "express-handlebars" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-handlebars");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;