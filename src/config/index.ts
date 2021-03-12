export * from './globals';
export { Logger } from './logger';

import { Server } from '../api/server';
import { RegisterRoutes } from '../api/routes';
import { RegisterMiddlewares } from '../api/middlewares';
import { RegisterSwaggerDocs } from './docs';
import { RegisterMissingRoutesHandler } from './missing-routes-handler';
import { RegisterErrorHandler } from './error-handler';

export class ServerConfiguration {
    constructor(server: Server) {
        RegisterSwaggerDocs(server.app);
        RegisterMiddlewares(server.app);
        RegisterRoutes(server.app);
        RegisterMissingRoutesHandler(server.app);
        RegisterErrorHandler(server.app);
    }
}
