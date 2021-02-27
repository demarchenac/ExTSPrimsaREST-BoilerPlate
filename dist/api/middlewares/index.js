"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddleware = void 0;
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = require("express");
function registerMiddleware(router) {
    router.use(helmet_1.default());
    router.use(express_1.json());
    router.use(compression_1.default());
}
exports.registerMiddleware = registerMiddleware;
//# sourceMappingURL=index.js.map