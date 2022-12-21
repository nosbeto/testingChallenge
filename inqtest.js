const inquirer = require("inquirer");

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'choice',
//       message: 'Add a position or be done',
//       choices: [
//         'Engineer',
//         'Intern',
//         new inquirer.Separator(),
//         "I'm done adding",
//       ],
//       filter(val){
//         return val
//       }
//     },
//     {
//         type: 'input',
//         name: 'Engineer',
//     }
// ])
// .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });

const QUESTIONS = [
    {
      name: 'role',
      type: 'list',
      message: 'Make your choice between addiong a role (Engineer/Intern) or be done',
      choices: ['Engineer', 'Intern', "I'm done adding"],
    },
    {
      name: 'Engineer',
      type: 'confirm',
      message: 'Do you want to add an Engineer?',
      when: (answers) => answers['role'] === 'Engineer',
    },
    {
        name: 'Intern',
        type: 'confirm',
        message: 'Do you want to add an Intern?',
        when: (answers) => answers['role'] === 'Intern',
    },
  ];
  inquirer.prompt(QUESTIONS)
    .then(answers =>
    {
      console.log(answers);
    });