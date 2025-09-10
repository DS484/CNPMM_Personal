import React from 'react';
import CartItem from './CartItem';
import { CartItemType } from '../../types';

interface CartListProps {
  items: CartItemType[];
  onRemove: (id: string) => void;
  onEdit: (item: CartItemType) => void; // Thêm prop này
}

const CartList: React.FC<CartListProps> = ({ items, onRemove, onEdit }) => {
  return (
    <div>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default CartList;