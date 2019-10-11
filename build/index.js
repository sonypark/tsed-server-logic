"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
var app = express_1.default();
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
