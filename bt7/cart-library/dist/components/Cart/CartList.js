"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var CartItem_1 = __importDefault(require("./CartItem"));
var CartList = function (_a) {
    var items = _a.items, onRemove = _a.onRemove, onEdit = _a.onEdit;
    return ((0, jsx_runtime_1.jsx)("div", { children: items.map(function (item) { return ((0, jsx_runtime_1.jsx)(CartItem_1.default, { item: item, onRemove: onRemove, onEdit: onEdit }, item.id)); }) }));
};
exports.default = CartList;
