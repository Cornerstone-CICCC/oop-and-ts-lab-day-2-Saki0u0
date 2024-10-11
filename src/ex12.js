// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.
function renameKeys(obj, keyMap) {
    var newObj = {};
    for (var key in obj) {
        var newKey = keyMap[key] || key;
        newObj[newKey] = obj[key];
    }
    return newObj; // 新しいオブジェクトを返す
}
// Expected output:
renameKeys({ name: "Alice", age: 30 }, { name: "fullName" });
// { fullName: "Alice", age: 30 }
