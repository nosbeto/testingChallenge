const Employee = require("../lib/Employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
}

// const alberto = new Manager('Alberto','1234','albertodearmas@fgem.com')
// console.log(alberto)

module.exports = Manager