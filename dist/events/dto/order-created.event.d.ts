import { CartItem } from "./cart-item";
export declare class OrderCreatedEvent {
    constructor(orderId: number, items: CartItem[], price: number, sagaId: string);
    sagaId: string;
    orderId: number;
    items: CartItem[];
    price: number;
}
