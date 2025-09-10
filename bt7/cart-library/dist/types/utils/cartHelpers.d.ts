import { CartItemType } from "../types";
export declare const addItem: (items: CartItemType[], newItem: CartItemType) => CartItemType[];
export declare const removeItem: (items: CartItemType[], itemId: string) => CartItemType[];
export declare const updateItem: (items: CartItemType[], updatedItem: CartItemType) => CartItemType[];
