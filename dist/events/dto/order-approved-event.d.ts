import { CartItemDto } from '../../dto/cart-item.dto';
export declare class OrderApprovedEvent {
    sagaId: string;
    orderId: number;
    userId: number;
    price: number;
    items: CartItemDto[];
    constructor(sagaId: string, orderId: number, userId: number, price: number, items: CartItemDto[]);
}
