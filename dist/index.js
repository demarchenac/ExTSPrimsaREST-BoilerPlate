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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("source-map-support/register");
require("module-alias/register");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const http_1 = require("http");
const globals_1 = require("@config/globals");
const server_1 = require("./api/server");
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = new server_1.Server().app;
            const server = http_1.createServer(app);
            server.listen(globals_1.env.NODE_PORT, () => {
                console.log(`Back-end server listening on port ${globals_1.env.NODE_PORT} @${globals_1.env.NODE_ENV} mode`);
            });
        }
        catch (err) {
        }
    });
})();
//# sourceMappingURL=index.js.map