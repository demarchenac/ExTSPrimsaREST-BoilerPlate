import { FieldErrors, ValidateError } from 'tsoa';
import { ERROR } from '../config';

export type CustomResponse<T> = {
    status: number;
    message: string;
    data: T;
};

export type ResponseRecordsResponse<T> = {
    status: number;
    message: string;
    data: { records: T[] };
};

export class RouteNotFoundError {
    status = ERROR.STATUS.NOT_FOUND;
    messages = ERROR.MESSAGE.NOT_FOUND;
    data = null;
}

export class NotFoundError {
    status = ERROR.STATUS.NOT_FOUND;
    messages = ERROR.MESSAGE.ENTITY_NOT_FOUND;
    data = null;
}

export class NotFoundException extends Error {
    public readonly name = 'NotFoundException';
    public readonly code = 'NotFoundException';
    public readonly message = ERROR.MESSAGE.ENTITY_NOT_FOUND;

    constructor() {
        super();
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}

export class AlreadyExistsException extends Error {
    public readonly name = 'AlreadyExistsException';
    public readonly code = 'AlreadyExistsException';
    public readonly message = ERROR.MESSAGE.ALREADY_EXISTS;

    constructor() {
        super();
        Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    }
}

export class AlreadyExistsError {
    status = ERROR.STATUS.CONFLICT;
    message = ERROR.MESSAGE.ALREADY_EXISTS;
    data = null;
}

export class BadRequestError {
    status = ERROR.STATUS.BAD_REQUEST;
    message = ERROR.MESSAGE.BAD_REQUEST;
    data: FieldErrors | null = null;

    constructor(error: ValidateError) {
        this.data = error?.fields;
    }
}

export class InternalServerError {
    status = ERROR.STATUS.INTERNAL_SERVER;
    message = ERROR.MESSAGE.INTERNAL_SERVER;
    data = null;
}
