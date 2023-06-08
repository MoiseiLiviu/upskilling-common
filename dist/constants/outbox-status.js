"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboxStatus = void 0;
var OutboxStatus;
(function (OutboxStatus) {
    OutboxStatus[OutboxStatus["STARTED"] = 0] = "STARTED";
    OutboxStatus[OutboxStatus["COMPLETED"] = 1] = "COMPLETED";
    OutboxStatus[OutboxStatus["FAILED"] = 2] = "FAILED";
})(OutboxStatus = exports.OutboxStatus || (exports.OutboxStatus = {}));
//# sourceMappingURL=outbox-status.js.map