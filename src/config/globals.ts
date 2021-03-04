export const env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    NODE_PORT: process.env.NODE_PORT || process.env.PORT || 8000,
    DATABASE_URL: process.env.DATABASE_URL || '',
};

export const RESPONSE = {
    STATUS: {
        OK: 200,
        NOT_FOUND: 404,
    },
};
