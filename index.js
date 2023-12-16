"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bigO_timecomplexity_1 = require("./dataStructures/bigO-timecomplexity");
var app = express();
var port = 3000;
var linearInstance = new bigO_timecomplexity_1.LinearTimeComplexity();
var result = linearInstance.summation(5);
var constantInstance = new bigO_timecomplexity_1.ConstantTimeComplexity();
var result2 = constantInstance.summation(5);
app.get('/', function (req, res) {
    res.send("Result: ".concat(result, ", Result2 : ").concat(result2));
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
