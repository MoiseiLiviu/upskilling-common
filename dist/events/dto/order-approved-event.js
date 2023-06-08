"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderApprovedEvent = void 0;
class OrderApprovedEvent {
    constructor(sagaId, orderId, userId, price, items) {
        this.sagaId = sagaId;
        this.orderId = orderId;
        this.userId = userId;
        this.price = price;
        this.items = items;
    }
}
exports.OrderApprovedEvent = OrderApprovedEvent;
//# sourceMappingURL=order-approved-event.js.map