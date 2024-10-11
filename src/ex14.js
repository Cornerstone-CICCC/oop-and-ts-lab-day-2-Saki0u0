// Create an interface `UserProfile` with properties `username`, `email`, and an optional `lastLogin` date.
// Write a function `getLastLoginMessage` that returns the last login date if available, otherwise a "No login recorded" message using nullish coalescing.
// Return type: string.
function getLastLoginMessage(user) {
    var _a, _b;
    return (_b = (_a = user.lastLogin) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "No login recorded";
}
// Expected output:
getLastLoginMessage({ username: "user1", email: "user1@example.com", lastLogin: new Date() });
// logs the date as a string
getLastLoginMessage({ username: "user2", email: "user2@example.com" });
// "No login recorded"
