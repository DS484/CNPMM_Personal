import React from 'react';
import { CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onEdit: (item: CartItemType) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onEdit, onRemove }) => {
  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;