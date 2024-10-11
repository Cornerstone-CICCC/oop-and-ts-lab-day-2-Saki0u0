// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.
function addValues(values) {
    if (typeof values[0] === "number") {
        return values.reduce(function (acc, val) { return acc + val; }, 0);
    }
    else if (typeof values[0] === "string") {
        return values.join("");
    }
    else {
        throw new Error("Error");
    }
}
// Expected output:
addValues([1, 2, 3]); // 6
addValues(["Hello", " ", "World"]); // "Hello World"
