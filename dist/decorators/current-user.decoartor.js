"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const gqlExecutionContext = graphql_1.GqlExecutionContext.create(context);
    const { req } = gqlExecutionContext.getContext();
    return req.user;
});
//# sourceMappingURL=current-user.decoartor.js.map