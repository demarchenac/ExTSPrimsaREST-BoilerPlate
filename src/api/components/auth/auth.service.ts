import argon from 'argon2';
import prisma from '@services/prisma';
import { JWT } from '@services/jwt';
import { AlreadyExistsException, InvalidCredentialsException, NotFoundException } from '@appTypes/response.type';
import { AuthResponse, LoginParams, SignUpParams } from './auth.type';
import { Controller } from '@tsoa/runtime';

export class AuthService {
    controller: Controller;
    constructor(controller: Controller) {
        this.controller = controller;
    }

    async doLogin(payload: LoginParams): Promise<AuthResponse> {
        const user = await prisma.user.findFirst({ where: { email: payload.email } });
        if (!user) throw new NotFoundException();

        const match = await argon.verify(user.password, payload.password);
        if (!match) throw new InvalidCredentialsException();

        const { refreshToken, accessToken } = await JWT.generatePair(user);
        this.controller.setHeader('Set-Cookie', [`wpid=${refreshToken}; HttpOnly`]);
        return AuthResponse.ACCESS_TOKEN_PROVIDED(accessToken);
    }

    async doSignup(payload: SignUpParams) {
        try {
            const hashedPassword = await argon.hash(payload.password);
            payload.password = hashedPassword;
            const user: any = await prisma.user.create({ data: payload });
            const { refreshToken, accessToken } = await JWT.generatePair(user);
            this.controller.setHeader('Set-Cookie', [`wpid=${refreshToken}; HttpOnly`]);
            return AuthResponse.ACCESS_TOKEN_PROVIDED(accessToken);
        } catch (error) {
            throw new AlreadyExistsException();
        }
    }
}
