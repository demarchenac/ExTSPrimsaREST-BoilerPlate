import 'reflect-metadata';

import 'source-map-support/register';

import 'module-alias/register';

/* Set environment from .env, see .env.example for guidance */
import { config } from 'dotenv';
config();

import { Application } from 'express';

import { createServer, Server as HttpServer } from 'http';

import { env } from '@config/globals';
import { Logger } from '@config/logger';

import { Server } from './api/server';

// Startup
const main = async () => {
    try {
        /* Start express server */
        const app: Application = new Server().app;
        const server: HttpServer = createServer(app);
        server.listen(env.NODE_PORT);

        server.on('listening', () => {
            Logger.info(`Back-end server listening on port ${env.NODE_PORT} @${env.NODE_ENV} mode`);
        });

        server.on('close', () => {
            Logger.info('Back-end server closed');
        });
    } catch (err) {
        Logger.error(err.stack);
    }
};

main();
