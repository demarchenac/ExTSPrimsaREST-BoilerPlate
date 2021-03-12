import compression from 'compression';
// import cors from 'cors';
import helmet from 'helmet';

import { Application } from 'express';
import { urlencoded, json } from 'body-parser';

import { MorganMiddleware } from './morgan';

// import { AuthService } from '@services/auth';
// import { UtilityService } from '@services/helper/utility';

// import { env, Clients } from '@config/globals';

/**
 * Init Express middleware
 *
 * @param {Router} router
 * @returns {void}
 */
export function RegisterMiddlewares(app: Application) {
    // if (env.NODE_ENV === 'development') {
    // 	router.use(cors({ origin: '*' }));
    // } else {
    // 	router.use(cors({ origin: ['http://localhost:4200'] }));
    // }

    // router.use((req: Request, res: Response, next: NextFunction) => {
    // 	req.client = Clients[req.get('Client') as keyof typeof Clients];

    // 	if (env.NODE_ENV === 'production' && req.client === undefined) {
    // 		return res.status(401).send('Unknown client');
    // 	}

    // 	return next();
    // });

    app.use(helmet());
    app.use(compression());
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(MorganMiddleware);

    // // Setup passport strategies
    // new AuthService().initStrategies();
}
