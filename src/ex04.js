// Create a generic function `mergeObjects` that takes two objects and merges them.
// - The objects should have a mandatory `id` field.
// - Allow partial updates to one of the objects using `Partial`.
// - Use constraints to enforce the `id` field.
// - Return type: merged object with both original and updated fields.
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
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Expected output:
mergeObjects({ id: 1, name: "Alice" }, { name: "Bob" });
// { id: 1, name: "Bob" }
