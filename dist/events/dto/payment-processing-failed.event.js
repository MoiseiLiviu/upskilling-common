"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessingFailureReason = exports.PaymentProcessingFailure = exports.PaymentProcessingFailedEvent = void 0;
class PaymentProcessingFailedEvent {
    constructor(orderId, failure, sagaId, items) {
        this.orderId = orderId;
        this.failure = failure;
        this.sagaId = sagaId;
        this.items = items;
    }
}
exports.PaymentProcessingFailedEvent = PaymentProcessingFailedEvent;
class PaymentProcessingFailure {
    constructor(reason, message) {
        this.reason = reason;
        this.message = message;
    }
}
exports.PaymentProcessingFailure = PaymentProcessingFailure;
var PaymentProcessingFailureReason;
(function (PaymentProcessingFailureReason) {
    PaymentProcessingFailureReason[PaymentProcessingFailureReason["EXTERNAL_PROVIDER_FAILURE"] = 0] = "EXTERNAL_PROVIDER_FAILURE";
    PaymentProcessingFailureReason[PaymentProcessingFailureReason["DATA_ACCESS_FAILURE"] = 1] = "DATA_ACCESS_FAILURE";
})(PaymentProcessingFailureReason = exports.PaymentProcessingFailureReason || (exports.PaymentProcessingFailureReason = {}));
//# sourceMappingURL=payment-processing-failed.event.js.map