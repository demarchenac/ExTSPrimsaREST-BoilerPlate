"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ping_methods_1 = __importDefault(require("../method/ping.methods"));
class PingRequestHandler {
    static getMessage(_req, res, _next) {
        const response = ping_methods_1.default.getMessage();
        res.status(200).send(response);
    }
}
exports.default = PingRequestHandler;
//# sourceMappingURL=ping.request_hanlder.js.map