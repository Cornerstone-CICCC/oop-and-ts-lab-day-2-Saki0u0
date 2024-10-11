// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.

function logDetails(data:[number,string]):void;
function logDetails(data:[string,number]):void;
function logDetails(data:[number,string] | [string,number]):void {
  if(typeof data[0] === "string"){
    const name = data[0];
    const age = data[1];
    console.log(`Name: ${name}, Age: ${age}`);
  }else if (typeof data[0] === "number"){
    const id = data[0];
    const name = data[1];
    console.log(`ID: ${id}, name: ${name}`);
  }
}

// Expected output:
logDetails(["Alice", 30]) // "Name: Alice, Age: 30"
logDetails([42, "Alice"]) // "ID: 42, Name: Alice"