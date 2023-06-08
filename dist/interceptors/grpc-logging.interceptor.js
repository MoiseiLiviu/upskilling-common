"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const logger_port_1 = require("../logger/logger.port");
let GrpcLoggingInterceptor = class GrpcLoggingInterceptor {
    constructor(logger) {
        this.logger = logger;
    }
    intercept(context, next) {
        const methodName = context.getHandler().name;
        const className = context.getClass().name;
        const args = context.getArgByIndex(1);
        this.logger.log(`Class: ${className}`, ` Method: ${methodName} Args: ${JSON.stringify(args)}`);
        const now = Date.now();
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => this.logger.log(`Class ${className}`, `Finished execution of method: ${methodName} in ${Date.now() - now}ms`)));
    }
};
GrpcLoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(logger_port_1.LoggerAdapterToken)),
    __metadata("design:paramtypes", [Object])
], GrpcLoggingInterceptor);
exports.GrpcLoggingInterceptor = GrpcLoggingInterceptor;
//# sourceMappingURL=grpc-logging.interceptor.js.map