"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var signin_controllar_js_1 = require("../controllar/signin.controllar.js");
var routerUrl = (0, express_1.Router)();
routerUrl.post('/', signin_controllar_js_1.signinControllar);
exports.default = routerUrl;
