const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const allfuncs = require("./htmlconstructor");

const path = "tree_structure.html";

const allClasses = [];

const baseq = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the team's manager name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the employee id",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the employee's email address",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the employee's office number",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      allClasses.push(manager);
      console.log(allClasses);
      roleq();
      // wrapper()
    });
};

const roleq = () => {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message:
          "Make your choice between addiong a role (Engineer/Intern) or be done",
        choices: ["Engineer", "Intern", "I'm done adding"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Engineer":
          engineerQ();
          break;
        case "Intern":
          internQ();
          break;
        default:
          wrapper();
      }
    });
};

const engineerQ = () => {
  inquirer
    .prompt([
      {
        name: "eName",
        type: "input",
        message: "Enter engineer's name",
        // when: (answers) => answers["role"] === "Engineer",
      },
      {
        name: "eId",
        type: "input",
        message: "Enter engineer's ID",
      },
      {
        name: "eEmail",
        type: "input",
        message: "Enter engineer's email",
      },
      {
        name: "eGithub",
        type: "input",
        message: "Enter Engineer's github username",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.eName,
        answers.eId,
        answers.eEmail,
        answers.eGithub
      );
      allClasses.push(engineer);
      console.log(allClasses);
      roleq();
    });
};

const internQ = () => {
  inquirer
    .prompt([
      {
        name: "iName",
        type: "input",
        message: "Enter intern's name",
        // when: (answers) => answers["role"] === "Engineer",
      },
      {
        name: "iId",
        type: "input",
        message: "Enter intern's ID",
      },
      {
        name: "iEmail",
        type: "input",
        message: "Enter intern's email",
      },
      {
        name: "iSchool",
        type: "input",
        message: "Enter intern's school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.iName,
        answers.iId,
        answers.iEmail,
        answers.iSchool
      );
      allClasses.push(intern);
      console.log(allClasses);
      roleq();
    });
};

const wrapper = () => {
  fs.writeFile(path, allfuncs(allClasses), (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Data written succesfully");
    }
  });
};

baseq();
