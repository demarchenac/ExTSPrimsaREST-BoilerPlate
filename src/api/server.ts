import express, { Application } from 'express';
import { ServerConfiguration } from '../config';

export class Server {
    private readonly _app: Application = express();

    public constructor() {
        new ServerConfiguration(this);
    }

    /**
     * Get Express app
     *
     * @returns {Application} Returns Express app
     */
    public get app(): Application {
        return this._app;
    }
}
