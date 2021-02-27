"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../../../controllers");
const PingRouter = express_1.default.Router();
exports.AppRouter = PingRouter;
PingRouter.use('/ping', controllers_1.PingController);
//# sourceMappingURL=ping.routes.js.map