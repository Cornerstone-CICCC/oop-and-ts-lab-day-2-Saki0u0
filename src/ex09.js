// Create a tuple `Course` that contains a course name, an instructor, and a variable-length list of student names.
// - Write a function `addStudent` that adds a student to the tuple and returns a new tuple.
// - Return type: a new tuple with the student added.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addStudent(course, student) {
    return __spreadArray(__spreadArray([], course, true), [student], false);
}
// Expected output:
addStudent(["Math", "Dr. Smith"], "John"); // ["Math", "Dr. Smith", "John"]
addStudent(["History", "Ms. Brown", "Jane"], "Emma"); // ["History", "Ms. Brown", "Jane", "Emma"]
