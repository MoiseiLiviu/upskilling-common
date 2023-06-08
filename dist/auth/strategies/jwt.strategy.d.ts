import { Strategy } from 'passport-jwt';
import { LoggerPort } from "../../logger";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly logger;
    private readonly secret;
    constructor(logger: LoggerPort, secret: string);
    validate(payload: any): Promise<any>;
}
export {};
