# Shopping Cart Library

This project is a shopping cart library built with React and TypeScript. It provides standardized components for building a shopping cart interface, including buttons, input fields, modals, and cards.

## Features

- **Button**: A reusable button component that can be customized with labels, click handlers, and disabled states.
- **InputText**: A flexible input field component for capturing user input with support for various types and placeholders.
- **Modal**: A modal dialog component for displaying important information or actions that require user confirmation.
- **Card**: A card component for presenting content in a structured layout.
- **Cart**: A complete shopping cart implementation that allows adding, editing, and removing items.

## Installation

To install the library, run the following command:

```
npm install cart-library
```

## Usage

Here is a basic example of how to use the components in your application:

```tsx
import React from 'react';
import { Button, InputText, Modal, Card, Cart } from 'cart-library';

const App = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart />
    </div>
  );
};

export default App;
```

## Components

### Button

```tsx
<Button label="Add to Cart" onClick={handleAdd} />
```

### InputText

```tsx
<InputText value={inputValue} onChange={handleInputChange} placeholder="Enter item name" />
```

### Modal

```tsx
<Modal isOpen={isModalOpen} onClose={handleClose}>
  <p>Are you sure you want to remove this item?</p>
</Modal>
```

### Card

```tsx
<Card title="Product Title" content="Product Description" footer={<Button label="Buy Now" />} />
```

### Cart

The `Cart` component manages the state of the shopping cart and renders the list of items.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.