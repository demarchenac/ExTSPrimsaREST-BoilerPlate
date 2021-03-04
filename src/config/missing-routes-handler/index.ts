import { Application, Response } from 'express';
import { RouteNotFoundError } from '../../types/response.type';
import { ERROR } from '../globals';

export function RegisterMissingRoutesHandler(app: Application) {
    app.use(function notFoundHandler(_req, res: Response) {
        res.status(ERROR.STATUS.NOT_FOUND).send(new RouteNotFoundError());
    });
}
