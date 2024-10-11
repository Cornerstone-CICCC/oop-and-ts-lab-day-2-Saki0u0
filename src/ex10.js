// Create two interfaces `Developer` and `Manager`. Both have a `name` but only the `Manager` has a `team`.
// - Create a function `promoteToManager` that takes a `Developer` and a team name, and returns a new object that includes both roles.
// - Return type: an intersection type combining `Developer` and `Manager`.
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
function promoteToManager(dev, team) {
    return __assign(__assign({}, dev), { team: team });
}
// Expected output:
promoteToManager({ name: "Alice", skills: ["TypeScript", "React"] }, "Frontend Team");
// { name: "Alice", skills: ["TypeScript", "React"], team: "Frontend Team" }
