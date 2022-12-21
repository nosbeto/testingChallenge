const Employee = require("./lib/Employee");

const managerHTML = (whatever) => {
  const managerConsFunc = (manager) => {
    return `        
<div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
            Role -> ${manager.role} <br>
            ID -> ${manager.id}
        </h6>
        <p class="card-text">
            ${manager.officeNumber}
        </p>
        <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
    </div>
</div>
        `;
  };
  const emptyArray = [];
  emptyArray.push(
    whatever
      .filter((employee) => employee.getRole() == "Manager")
      .map((indManager) => managerConsFunc(indManager))
  );
  return emptyArray.join("");
};

const allEngineers = (whatever) => {
  const managerConsFunc = (engineer) => {
    return `
<div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
            Role -> ${engineer.role} <br>
            ID -> ${engineer.id}
        </h6>
        <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
        <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a>
    </div>
</div>
        `;
  };
  const emptyArray = [];
  emptyArray.push(
    whatever
      .filter((employee) => employee.getRole() == "Engineer")
      .map((indEngineer) => managerConsFunc(indEngineer))
  );
  return emptyArray.join("");
};

const allInterns = (whatever) => {
  const managerConsFunc = (intern) => {
    return `
<div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
            Role -> ${intern.role} <br>
            ID -> ${intern.id}
        </h6>
        <p class="card-text">
            ${intern.school}
        </p>
        <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
    </div>
</div>
        `;
  };
  const emptyArray = [];
  emptyArray.push(
    whatever
      .filter((employee) => employee.getRole() == "Intern")
      .map((indIntern) => managerConsFunc(indIntern))
  );
  return emptyArray.join("");
};

module.exports = (allClasses) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Tree Structure</title>
</head>
<body>
<div class="container">
    <div class="card-columns card-group">
        ${managerHTML(allClasses)}
        ${allEngineers(allClasses)}
        ${allInterns(allClasses)}
    </div>
</div>
</body>
</html>
    `;
};