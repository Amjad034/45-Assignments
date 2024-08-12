import inquirer from "inquirer";
const question1 = await inquirer.prompt({
    name: "num1",
    message: "Enter the first number:",
    type: "number",
});
const question2 = await inquirer.prompt({
    name: "num2",
    message: "Enter the second number:",
    type: "number",
});
let result = question1.num1 + question2.num2;
console.log(result);
