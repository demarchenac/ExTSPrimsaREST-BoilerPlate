import morgan, { StreamOptions } from 'morgan';
import { Logger } from '@config/logger';

/**
 * Override the stream method by telling morgan to use the custom logger
 * instead of console.log
 */
const stream: StreamOptions = {
    /* Use the http severity since morgan inputs the http methods. */
    write: (message) => Logger.http(message),
};

/**
 * Skip http logs from morgan if the application is not running on development
 * mode. This method is not really needed here since the Logger is already aware
 * that it should print only warning and error messages on production.
 */
const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};

/* Build the middleware */
const MorganMiddleware = morgan(
    /**
     * Defining format string (this is the default one). The message format
     * is made from tokens, and each token is defined inside the Morgan library.
     * The creation of custom tokens to show only what you want to see is possible.
     */
    ':method :url :status :res[content-length] - :response-time ms',
    /* Overriding the default skip and stream methods of morgan */
    { stream, skip },
);

export { MorganMiddleware };
