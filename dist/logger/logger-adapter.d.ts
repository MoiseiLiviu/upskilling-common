import { Logger } from '@nestjs/common';
import { LoggerPort } from './logger.port';
export declare class LoggerAdapter extends Logger implements LoggerPort {
    debug(context: string, message: string): void;
    error(context: string, message: string, trace?: string): void;
    log(context: string, message: string): void;
    verbose(context: string, message: string): void;
    warn(context: string, message: string): void;
}
