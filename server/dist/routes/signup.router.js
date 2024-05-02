"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var signup_controllar_js_1 = require("../controllar/signup.controllar.js");
var routerUrl = (0, express_1.Router)();
routerUrl.post('/', signup_controllar_js_1.signupControllar);
exports.default = routerUrl;
