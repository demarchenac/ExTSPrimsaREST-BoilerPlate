/**
 * Since TSOA doesn't support external type declarations,
 * we'll use this as a workaround.
 */

import { User } from '@prisma/client';
import { SUCCESS } from '../../../config';
import { CustomResponse, ResponseRecordsResponse } from '../../../types/response.type';

export type UserCreationParams = Pick<User, 'email' | 'name' | 'lastName' | 'password'>;
export type UserUpdateParams = Pick<
    User,
    'email' | 'name' | 'lastName' | 'password' | 'middleName' | 'phone' | 'phoneCode' | 'surName' | 'username'
>;

export class UserResponse implements CustomResponse<User | null> {
    status: number;
    message: string;
    data: User;

    constructor(status: number, message: string, data: User) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static FOUND(data: User) {
        return new UserResponse(SUCCESS.STATUS.OK, SUCCESS.MESSAGE.FOUND, data);
    }

    static CREATED(data: User) {
        return new UserResponse(SUCCESS.STATUS.CREATED, SUCCESS.MESSAGE.CREATED, data);
    }

    static UPDATED(data: User) {
        return new UserResponse(SUCCESS.STATUS.OK, SUCCESS.MESSAGE.UPDATED, data);
    }
}

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
        return new UserResponseWithRecords(SUCCESS.STATUS.OK, SUCCESS.MESSAGE.LISTED, records);
    }
}
