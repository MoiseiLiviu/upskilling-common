import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerPort } from '../logger/logger.port';
export declare class GrpcLoggingInterceptor implements NestInterceptor {
    private readonly logger;
    constructor(logger: LoggerPort);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
