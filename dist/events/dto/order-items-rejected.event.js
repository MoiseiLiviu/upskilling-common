"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsRejectedEvent = void 0;
class OrderItemsRejectedEvent {
    constructor(orderId, failedProductApprovals, sagaId) {
        this.orderId = orderId;
        this.sagaId = sagaId;
        this.failedProductApprovals = failedProductApprovals;
    }
}
exports.OrderItemsRejectedEvent = OrderItemsRejectedEvent;
//# sourceMappingURL=order-items-rejected.event.js.map