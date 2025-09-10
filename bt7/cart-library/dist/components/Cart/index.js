"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CartList_1 = __importDefault(require("./CartList"));
var cartHelpers_1 = require("../../utils/cartHelpers");
var Cart = function () {
    var _a = (0, react_1.useState)([]), items = _a[0], setItems = _a[1];
    var handleAddItem = function (item) {
        setItems(function (prevItems) { return (0, cartHelpers_1.addItem)(prevItems, item); });
    };
    var handleRemoveItem = function (id) {
        setItems(function (prevItems) { return (0, cartHelpers_1.removeItem)(prevItems, id); });
    };
    var handleUpdateItem = function (updatedItem) {
        setItems(function (prevItems) { return (0, cartHelpers_1.updateItem)(prevItems, updatedItem); });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CartList_1.default, { items: items, onRemove: handleRemoveItem, onEdit: handleUpdateItem }) }));
};
exports.default = Cart;
