// name, id, email, getName(), getId(), getEmail(), getRole() --> returns manager
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object Manager with 'name', 'id', 'email', and office number when called", () => {
      const manager = new Manager("Alberto", "1234", "alberto@email.com", "4321");
      expect(manager.name).toEqual("Alberto");
      expect(manager.id).toEqual("1234");
      expect(manager.email).toEqual("alberto@email.com");
      expect(manager.role).toEqual('Manager')
      expect(manager.officeNumber).toEqual('4321')
    });
  });
});