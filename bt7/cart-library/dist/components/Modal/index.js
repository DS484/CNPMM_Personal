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
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "modal-overlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "modal-content" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "modal-close", onClick: onClose }, { children: "\u00D7" })), children] })) })));
};
exports.default = Modal;
