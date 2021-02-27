"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const method_1 = __importDefault(require("../method"));
class PingRequestHandler {
    static getMessage(_req, res, _next) {
        const response = method_1.default.getMessage();
        res.status(200).send(response);
    }
}
exports.default = PingRequestHandler;
//# sourceMappingURL=index.js.map