import React, { useState } from 'react';
import CartList from './CartList';
import { CartItemType } from '../../types';
import { addItem, removeItem, updateItem } from '../../utils/cartHelpers';

const Cart: React.FC = () => {
    const [items, setItems] = useState<CartItemType[]>([]);

    const handleAddItem = (item: CartItemType) => {
        setItems(prevItems => addItem(prevItems, item));
    };

    const handleRemoveItem = (id: string) => {
        setItems(prevItems => removeItem(prevItems, id));
    };

    const handleUpdateItem = (updatedItem: CartItemType) => {
        setItems(prevItems => updateItem(prevItems, updatedItem));
    };

    return (
        <div>
            <CartList items={items} onRemove={handleRemoveItem} onEdit={handleUpdateItem} />
            {/* Add functionality to add items to the cart */}
        </div>
    );
};

export default Cart;