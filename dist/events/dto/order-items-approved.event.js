"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsApprovedEvent = void 0;
class OrderItemsApprovedEvent {
    constructor(orderId, sagaId, items) {
        this.orderId = orderId;
        this.sagaId = sagaId;
        this.items = items;
    }
}
exports.OrderItemsApprovedEvent = OrderItemsApprovedEvent;
//# sourceMappingURL=order-items-approved.event.js.map