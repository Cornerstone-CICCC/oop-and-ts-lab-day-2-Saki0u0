// Create two interfaces `Flyable` and `Swimmable`. Each should have unique methods.
// Create a class `Duck` that implements both interfaces.
// Write a function `getCapabilities` that accepts an object with both interfaces and logs the duck's capabilities.
// Return type: void.
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.fly = function () {
        console.log("Duck is flying");
    };
    Duck.prototype.swim = function () {
        console.log("Duck is swimming");
    };
    return Duck;
}());
function getCapabilities(duck) {
    duck.fly();
    duck.swim();
}
// Expected output:
getCapabilities(new Duck());
// Duck is flying
// Duck is swimming
