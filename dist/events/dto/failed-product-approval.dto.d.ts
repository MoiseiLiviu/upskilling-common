export declare class FailedProductApprovalDto {
    productId: number;
    failedChecks: FailedCheckDto[];
    constructor(productId: number, failedChecks: FailedCheckDto[]);
}
export declare class FailedCheckDto {
    reason: ProductApprovalFailReason;
    message: string;
    constructor(reason: ProductApprovalFailReason, message: string);
}
export declare enum ProductApprovalFailReason {
    NOT_FOUND = 0,
    DIFFERENT_PRICE = 1,
    NOT_ENOUGH_UNITS = 2
}
