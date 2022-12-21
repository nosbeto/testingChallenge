// name, id, email, getName(), getId(), getEmail(), getRole() --> returns Employee
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object Employee with 'name', 'id', 'email' when called", () => {
      const employee = new Employee("Alberto", "1234", "alberto@email.com");
      expect(employee.name).toEqual("Alberto");
      expect(employee.id).toEqual("1234");
      expect(employee.email).toEqual("alberto@email.com");
      expect(employee.role).toEqual('Employee')
    });
  });
});
