"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("@config/docs/swagger.json"));
class Server {
    constructor() {
        this._app = express_1.default();
        this.setUpDocs();
        routes_1.RegisterRoutes(this._app);
    }
    setUpDocs() {
        this._app.use('/docs', swagger_ui_express_1.default.serve, (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.send(swagger_ui_express_1.default.generateHTML(swagger_json_1.default));
        }));
    }
    get app() {
        return this._app;
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map