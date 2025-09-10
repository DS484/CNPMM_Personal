import { CartItemType } from "../types";

// Thêm item mới vào giỏ
export const addItem = (
    items: CartItemType[],
    newItem: CartItemType
): CartItemType[] => {
    return [...items, newItem];
};

// Xóa item theo id
export const removeItem = (
    items: CartItemType[],
    itemId: string
): CartItemType[] => {
    return items.filter(item => item.id !== itemId);
};

// Cập nhật item
export const updateItem = (
    items: CartItemType[],
    updatedItem: CartItemType
): CartItemType[] => {
    return items.map(item =>
        item.id === updatedItem.id ? updatedItem : item
    );
};
