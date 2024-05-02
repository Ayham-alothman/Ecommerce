"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinControllar = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var signin_db_js_1 = require("../db/signin.db.js");
function signinControllar(req, res) {
    if (req.body.email.length >= 8 && req.body.password.length >= 8) {
        (0, signin_db_js_1.valditionUser)(req.body.email, req.body.password)
            .then(function (d) {
            var Payload = { name: d === null || d === void 0 ? void 0 : d.name, email: d === null || d === void 0 ? void 0 : d.email };
            var token = (0, jsonwebtoken_1.sign)(Payload, 'ayham1998', { expiresIn: '2d' });
            res.status(200).cookie('token', token, { maxAge: 900000 }).end();
        })
            .catch(function (e) { res.status(403).json(e); });
    }
    else {
        res.status(400).json("there miss data");
    }
    //valdiate data from database 
    //respones request 
}
exports.signinControllar = signinControllar;
