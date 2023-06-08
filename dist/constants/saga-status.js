"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagaStatus = void 0;
var SagaStatus;
(function (SagaStatus) {
    SagaStatus[SagaStatus["STARTED"] = 0] = "STARTED";
    SagaStatus[SagaStatus["PROCESSING"] = 1] = "PROCESSING";
    SagaStatus[SagaStatus["COMPLETED"] = 2] = "COMPLETED";
    SagaStatus[SagaStatus["COMPENSATING"] = 3] = "COMPENSATING";
    SagaStatus[SagaStatus["COMPENSATED"] = 4] = "COMPENSATED";
})(SagaStatus = exports.SagaStatus || (exports.SagaStatus = {}));
//# sourceMappingURL=saga-status.js.map