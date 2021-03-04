/**
 * Since TSOA doesn't support external type declarations,
 * we'll use this as a workaround.
 */

import { User } from '@prisma/client';
import { RESPONSE } from '../../../config/globals';
import { CustomResponse, ResponseRecordsResponse } from '../../../types/response.type';

export class UserResponse implements CustomResponse<User | null> {
    status: number;
    message: string;
    data: User | null;

    constructor(status: number, message: string, data: User | null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static FOUND(data: User) {
        return new UserResponse(RESPONSE.STATUS.OK, 'user found', data);
    }

    static NOT_FOUND() {
        return new UserResponse(RESPONSE.STATUS.NOT_FOUND, 'user not found', null);
    }
}

export type UserFound = {
    status: 200;
    message: 'user found';
    data: User;
};

export type UserNotFound = {
    status: 404;
    message: 'user not found';
    data: null;
};

export class UserResponseWithRecords implements ResponseRecordsResponse<User> {
    status: number;
    message: string;
    data: { records: User[] };

    constructor(status: number, message: string, records: User[]) {
        this.status = status;
        this.message = message;
        this.data = { records };
    }

    static LISTED(records: User[]) {
        return new UserResponseWithRecords(302, 'users listed', records);
    }
}

export type UsersListed = {
    status: 302;
    message: 'users listed';
    data: User;
};
