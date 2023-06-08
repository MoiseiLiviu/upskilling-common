import { CartItemDto } from '../../dto/cart-item.dto';
export declare class OrderItemsApprovedEvent {
    orderId: number;
    sagaId: string;
    items: CartItemDto[];
    constructor(orderId: number, sagaId: string, items: CartItemDto[]);
}
