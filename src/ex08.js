// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.
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
function updateCompany(company, updates) {
    return __assign(__assign(__assign({}, company), updates), { employees: updates.employees
            ? updates.employees.map(function (updatedEmployee, index) {
                return __assign(__assign({}, company.employees[index]), updatedEmployee);
            })
            : company.employees });
}
// Expected output:
var company = { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Developer", salary: 100000 }] };
updateCompany(company, { employees: [{ name: "Alice", role: "Senior Developer" }] });
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }
