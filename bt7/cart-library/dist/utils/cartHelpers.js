"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.removeItem = exports.addItem = void 0;
// Thêm item mới vào giỏ
var addItem = function (items, newItem) {
    return __spreadArray(__spreadArray([], items, true), [newItem], false);
};
exports.addItem = addItem;
// Xóa item theo id
var removeItem = function (items, itemId) {
    return items.filter(function (item) { return item.id !== itemId; });
};
exports.removeItem = removeItem;
// Cập nhật item
var updateItem = function (items, updatedItem) {
    return items.map(function (item) {
        return item.id === updatedItem.id ? updatedItem : item;
    });
};
exports.updateItem = updateItem;
