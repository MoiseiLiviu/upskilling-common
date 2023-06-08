import { FailedProductApprovalDto } from "./failed-product-approval.dto";
export declare class OrderItemsRejectedEvent {
    sagaId: string;
    orderId: number;
    failedProductApprovals: FailedProductApprovalDto[];
    constructor(orderId: number, failedProductApprovals: FailedProductApprovalDto[], sagaId: string);
}
