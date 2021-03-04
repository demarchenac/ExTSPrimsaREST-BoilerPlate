import { Application, Request, Response } from 'express';
import SwaggerUi from 'swagger-ui-express';
import SwaggerJSON from './swagger.json';

export function RegisterSwaggerDocs(app: Application) {
    app.use('/docs', SwaggerUi.serve, async (_req: Request, res: Response) => {
        return res.send(SwaggerUi.generateHTML(SwaggerJSON));
    });
}
