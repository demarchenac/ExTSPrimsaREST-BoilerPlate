"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const express_1 = __importDefault(require("express"));
const request_hanlder_1 = __importDefault(require("./request-hanlder"));
const PingController = express_1.default.Router();
exports.PingController = PingController;
PingController.get('', request_hanlder_1.default.getMessage);
//# sourceMappingURL=ping.controller.js.map