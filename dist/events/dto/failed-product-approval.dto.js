"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductApprovalFailReason = exports.FailedCheckDto = exports.FailedProductApprovalDto = void 0;
class FailedProductApprovalDto {
    constructor(productId, failedChecks) {
        this.productId = productId;
        this.failedChecks = failedChecks;
    }
}
exports.FailedProductApprovalDto = FailedProductApprovalDto;
class FailedCheckDto {
    constructor(reason, message) {
        this.reason = reason;
        this.message = message;
    }
}
exports.FailedCheckDto = FailedCheckDto;
var ProductApprovalFailReason;
(function (ProductApprovalFailReason) {
    ProductApprovalFailReason[ProductApprovalFailReason["NOT_FOUND"] = 0] = "NOT_FOUND";
    ProductApprovalFailReason[ProductApprovalFailReason["DIFFERENT_PRICE"] = 1] = "DIFFERENT_PRICE";
    ProductApprovalFailReason[ProductApprovalFailReason["NOT_ENOUGH_UNITS"] = 2] = "NOT_ENOUGH_UNITS";
})(ProductApprovalFailReason = exports.ProductApprovalFailReason || (exports.ProductApprovalFailReason = {}));
//# sourceMappingURL=failed-product-approval.dto.js.map