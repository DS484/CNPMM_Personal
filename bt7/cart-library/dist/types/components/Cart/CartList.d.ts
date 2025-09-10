import React from 'react';
import { CartItemType } from '../../types';
interface CartListProps {
    items: CartItemType[];
    onRemove: (id: string) => void;
    onEdit: (item: CartItemType) => void;
}
declare const CartList: React.FC<CartListProps>;
export default CartList;
