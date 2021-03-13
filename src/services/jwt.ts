import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { env } from '@config/globals';

interface TokenPayload {
    id: number;
    tokenVersion: number;
}

interface TokenPair {
    accessToken: string;
    refreshToken: string;
}

const ACCESS_EXPIRES_IN = '10m';
const REFRESH_EXPIRES_IN = '1w';

class JWTClient {
    async generate(payload: User) {
        const tokenPayload: TokenPayload = {
            id: payload.id,
            tokenVersion: payload.tokenVersion,
        };
        return jwt.sign(tokenPayload, env.JWT_ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
    }

    async generatePair(payload: User): Promise<TokenPair> {
        const tokenPayload: TokenPayload = {
            id: payload.id,
            tokenVersion: payload.tokenVersion,
        };
        const access = await jwt.sign(tokenPayload, env.JWT_ACCESS_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
        const refresh = await jwt.sign(tokenPayload, env.JWT_REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });

        return {
            accessToken: access,
            refreshToken: refresh,
        };
    }
}

const JWT = new JWTClient();

export { JWT };
