/**
 * Since TSOA doesn't support external type declarations,
 * we'll use this as a workaround.
 */

import { User } from '@prisma/client';
import { SUCCESS } from '@config/globals';
import { CustomResponse } from '@appTypes/response.type';

export type LoginParams = Pick<User, 'email' | 'password'>;
export type SignUpParams = Pick<User, 'email' | 'firstName' | 'lastName' | 'password'>;

type TokenNode = {
    token: string;
};

export class AuthResponse implements CustomResponse<TokenNode | null> {
    status: number;
    message: string;
    data: TokenNode | null;

    constructor(status: number, message: string, data: TokenNode | null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static ACCESS_TOKEN_PROVIDED(token: string) {
        return new AuthResponse(SUCCESS.STATUS.OK, SUCCESS.MESSAGE.FOUND, { token });
    }
}
