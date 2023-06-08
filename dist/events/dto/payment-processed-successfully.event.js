"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessedSuccessfullyEvent = void 0;
class PaymentProcessedSuccessfullyEvent {
    constructor(orderId, sagaId) {
        this.orderId = orderId;
        this.sagaId = sagaId;
    }
}
exports.PaymentProcessedSuccessfullyEvent = PaymentProcessedSuccessfullyEvent;
//# sourceMappingURL=payment-processed-successfully.event.js.map