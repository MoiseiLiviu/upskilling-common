"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreatedEvent = void 0;
class OrderCreatedEvent {
    constructor(orderId, items, price, sagaId) {
        this.orderId = orderId;
        this.items = items;
        this.price = price;
        this.sagaId = sagaId;
    }
}
exports.OrderCreatedEvent = OrderCreatedEvent;
//# sourceMappingURL=order-created.event.js.map