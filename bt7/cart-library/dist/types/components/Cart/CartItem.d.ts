import React from 'react';
import { CartItemType } from '../../types';
interface CartItemProps {
    item: CartItemType;
    onEdit: (item: CartItemType) => void;
    onRemove: (id: string) => void;
}
declare const CartItem: React.FC<CartItemProps>;
export default CartItem;
