import express, { Application, Request, Response } from 'express';
import { RegisterRoutes } from './routes';
import SwaggerUi from 'swagger-ui-express';
import SwaggerJSON from '@config/docs/swagger.json';

export class Server {
    private readonly _app: Application = express();

    public constructor() {
        this.setUpDocs();
        RegisterRoutes(this._app);
    }

    private setUpDocs() {
        this._app.use('/docs', SwaggerUi.serve, async (_req: Request, res: Response) => {
            return res.send(SwaggerUi.generateHTML(SwaggerJSON));
        });
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
