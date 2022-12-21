// name, id, email, getName(), getId(), getEmail(), getRole() --> returns Intern
const intern = require("../lib/Intern.js");

describe("intern", () => {
  describe("Initialization", () => {
    it("should return an object intern with 'name', 'id', 'email', and school account when called", () => {
      const intern = new Intern("Alberto", "1234", "alberto@email.com", "UNCC");
      expect(intern.name).toEqual("Alberto");
      expect(intern.id).toEqual("1234");
      expect(intern.email).toEqual("alberto@email.com");
      expect(intern.role).toEqual('Intern')
      expect(intern.school).toEqual('UNCC')
    });
  });
});