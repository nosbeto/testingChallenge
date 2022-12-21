const Employee = require("../lib/Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern'
    }
}

module.exports = Intern

// const alberto = new Intern('Alberto','1234','albertodearmas@fgem.com', 'UNCC')
// console.log(alberto)
// console.log(alberto.school)