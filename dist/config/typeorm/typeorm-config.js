"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOrmConfig = void 0;
const config_constants_1 = require("./config.constants");
const getTypeOrmConfig = (configService, entities) => ({
    type: 'postgres',
    host: configService.get(config_constants_1.DB_HOST),
    port: configService.get(config_constants_1.DB_PORT),
    username: configService.get(config_constants_1.DB_USERNAME),
    password: configService.get(config_constants_1.DB_PASSWORD),
    database: configService.get(config_constants_1.DB_DATABASE),
    entities,
    migrations: ['dist/migrations/*{.ts,.js}'],
    migrationsRun: true,
    synchronize: false,
    logging: configService.get(config_constants_1.DB_LOGGING, false),
    ssl: configService.get(config_constants_1.DB_SSL, false),
});
exports.getTypeOrmConfig = getTypeOrmConfig;
//# sourceMappingURL=typeorm-config.js.map