// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    var activeCount = 0;
    var ageSum = 0;
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user.active) {
            activeCount++;
            ageSum += user.age;
        }
    }
    var averageAge = activeCount > 0 ? ageSum / activeCount : 0;
    return { activeCount: activeCount, averageAge: averageAge };
}
// Expected output:
generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true }
]);
// { activeCount: 2, averageAge: 32.5 }
