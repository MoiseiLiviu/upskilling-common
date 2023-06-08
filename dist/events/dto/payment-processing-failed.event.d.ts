import { CartItemDto } from '../../dto/cart-item.dto';
export declare class PaymentProcessingFailedEvent {
    sagaId: string;
    orderId: number;
    failure: PaymentProcessingFailure;
    items: CartItemDto[];
    constructor(orderId: number, failure: PaymentProcessingFailure, sagaId: string, items: CartItemDto[]);
}
export declare class PaymentProcessingFailure {
    reason: PaymentProcessingFailureReason;
    message: string;
    constructor(reason: PaymentProcessingFailureReason, message: string);
}
export declare enum PaymentProcessingFailureReason {
    EXTERNAL_PROVIDER_FAILURE = 0,
    DATA_ACCESS_FAILURE = 1
}
