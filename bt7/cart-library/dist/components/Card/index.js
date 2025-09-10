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
var Card = function (_a) {
    var title = _a.title, content = _a.content, footer = _a.footer;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "card-header" }, { children: (0, jsx_runtime_1.jsx)("h2", { children: title }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "card-body" }, { children: content })), footer && (0, jsx_runtime_1.jsx)("div", __assign({ className: "card-footer" }, { children: footer }))] })));
};
exports.default = Card;
