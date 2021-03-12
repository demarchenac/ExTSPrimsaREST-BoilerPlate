export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NODE_PORT: process.env.NODE_PORT || process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL || '',
};

export const ERROR = {
    STATUS: {
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        CONFLICT: 409,
        INTERNAL_SERVER: 500,
    },
    MESSAGE: {
        BAD_REQUEST: 'Bad request',
        NOT_FOUND: 'Resource not found',
        ENTITY_NOT_FOUND: 'Entity not found',
        ALREADY_EXISTS:
            "The resource presents conflicts, it's possible that some of the fields already exists or the modification is not possible.",
        INTERNAL_SERVER: 'Internal server error.',
    },
};

export const SUCCESS = {
    STATUS: {
        OK: 200,
        CREATED: 201,
    },
    MESSAGE: {
        FOUND: 'Resource found',
        LISTED: 'Resources listed',
        CREATED: 'Resource created',
        UPDATED: 'Resource created',
    },
};
