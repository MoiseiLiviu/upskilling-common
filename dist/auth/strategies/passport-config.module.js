"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JwtTokenCheckerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenCheckerModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_strategy_1 = require("./jwt.strategy");
const logger_1 = require("../../logger");
const config_1 = require("@nestjs/config");
let JwtTokenCheckerModule = JwtTokenCheckerModule_1 = class JwtTokenCheckerModule {
    static forRoot() {
        return {
            module: JwtTokenCheckerModule_1,
            imports: [logger_1.LoggerModule, config_1.ConfigModule],
            providers: [
                {
                    inject: [logger_1.LoggerAdapterToken, config_1.ConfigService],
                    provide: jwt_strategy_1.JwtStrategy,
                    useFactory: (logger, configService) => new jwt_strategy_1.JwtStrategy(logger, configService.get('JWT_TOKEN_SECRET'))
                }
            ]
        };
    }
};
JwtTokenCheckerModule = JwtTokenCheckerModule_1 = __decorate([
    (0, common_1.Module)({})
], JwtTokenCheckerModule);
exports.JwtTokenCheckerModule = JwtTokenCheckerModule;
//# sourceMappingURL=passport-config.module.js.map