"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypeOrmConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const typeorm_config_1 = require("./typeorm-config");
let TypeOrmConfigModule = TypeOrmConfigModule_1 = class TypeOrmConfigModule {
    static register(entities) {
        return {
            module: TypeOrmConfigModule_1,
            imports: [
                config_1.ConfigModule,
                typeorm_1.TypeOrmModule.forRootAsync({
                    inject: [config_1.ConfigService],
                    useFactory: async (configService) => (0, typeorm_config_1.getTypeOrmConfig)(configService, entities)
                })
            ],
            exports: [typeorm_1.TypeOrmModule]
        };
    }
};
TypeOrmConfigModule = TypeOrmConfigModule_1 = __decorate([
    (0, common_1.Module)({})
], TypeOrmConfigModule);
exports.TypeOrmConfigModule = TypeOrmConfigModule;
//# sourceMappingURL=typeorm.module.js.map