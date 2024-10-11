// Create an interface `Team` that contains a readonly `name` and `members` array.
// - Use `Partial` to allow updates to the `members`.
// - Return type: `Team` after applying partial updates.
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
function updateTeam(team, updates) {
    return __assign(__assign({}, team), updates);
}
// Expected output:
var team = { name: "Dev Team", members: [{ name: "Alice", role: "Developer" }] };
updateTeam(team, { members: [{ name: "Bob", role: "Designer" }] });
// { name: "Dev Team", members: [{ name: "Bob", role: "Designer" }] }
