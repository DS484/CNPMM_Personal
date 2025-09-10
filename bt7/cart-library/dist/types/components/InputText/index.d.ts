import React from 'react';
interface InputTextProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}
declare const InputText: React.FC<InputTextProps>;
export default InputText;
