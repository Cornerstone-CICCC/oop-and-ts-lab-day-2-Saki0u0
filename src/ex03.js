// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.
function logDetails(data) {
    if (typeof data[0] === "string") {
        var name_1 = data[0];
        var age = data[1];
        console.log("Name: ".concat(name_1, ", Age: ").concat(age));
    }
    else if (typeof data[0] === "number") {
        var id = data[0];
        var name_2 = data[1];
        console.log("ID: ".concat(id, ", name: ").concat(name_2));
    }
}
// Expected output:
logDetails(["Alice", 30]); // "Name: Alice, Age: 30"
logDetails([42, "Alice"]); // "ID: 42, Name: Alice"
