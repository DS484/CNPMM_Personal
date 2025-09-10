export interface CartItemType {
    id: string;
    name: string;
    price: number;
    quantity: number;
    title: string;
}

export interface CartProps {
    items: CartItemType[];
    onRemove: (id: string) => void;
    onEdit: (item: CartItemType) => void;
}