"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NODE_PORT: process.env.NODE_PORT || process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL || '',
};
//# sourceMappingURL=globals.js.map