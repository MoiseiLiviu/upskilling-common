import { LoggerPort } from "./logger.port";
export declare class WinstonLoggerAdapter implements LoggerPort {
    private readonly logger;
    constructor();
    log(message: string): void;
    error(message: string, trace: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
}
