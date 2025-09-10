"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var InputText = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b;
    return ((0, jsx_runtime_1.jsx)("input", { type: type, value: value, onChange: onChange, placeholder: placeholder, className: "input-text" }));
};
exports.default = InputText;
