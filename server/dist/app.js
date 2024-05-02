"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var signup_router_js_1 = __importDefault(require("./routes/signup.router.js"));
var signin_router_js_1 = __importDefault(require("./routes/signin.router.js"));
app.use('/signup', signup_router_js_1.default);
app.use('/signin', signin_router_js_1.default);
var Port = 4000;
app.listen(Port, function () { console.log("listening on port number ".concat(Port)); });
