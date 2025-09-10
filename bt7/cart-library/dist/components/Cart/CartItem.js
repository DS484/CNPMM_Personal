"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var CartItem = function (_a) {
    var item = _a.item, onEdit = _a.onEdit, onRemove = _a.onRemove;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "cart-item" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: item.title }), (0, jsx_runtime_1.jsxs)("p", { children: ["Price: $", item.price] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Quantity: ", item.quantity] }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return onEdit(item); } }, { children: "Edit" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return onRemove(item.id); } }, { children: "Remove" }))] })));
};
exports.default = CartItem;
