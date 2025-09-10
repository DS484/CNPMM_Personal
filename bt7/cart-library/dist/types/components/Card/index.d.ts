import React from 'react';
interface CardProps {
    title: string;
    content: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
