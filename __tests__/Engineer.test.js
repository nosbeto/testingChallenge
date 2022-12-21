// name, id, email, getName(), getId(), getEmail(), getRole() --> returns Engineer
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object Engineer with 'name', 'id', 'email', and github account when called", () => {
      const engineer = new Engineer("Alberto", "1234", "alberto@email.com", "nosbeto");
      expect(engineer.name).toEqual("Alberto");
      expect(engineer.id).toEqual("1234");
      expect(engineer.email).toEqual("alberto@email.com");
      expect(engineer.role).toEqual('Engineer')
      expect(engineer.github).toEqual('nosbeto')
    });
  });
});