#!./usr/bin/eva node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter First number", type: "number", name: "firstnumber"
    },
    { message: "Enter Second number", type: "number", name: "secondnumber" },
    { message: "choose your operator", type: "list", name: "operator", choices: ["division", "addition", "subtraction", "multiplication"] }
]);
{
    if (answer.operator === "division")
        console.log(answer.firstnumber / answer.secondnumber);
    else if (answer.operator === "addition")
        console.log(answer.firstnumber + answer.secondnumber);
    else if (answer.operator === "subtraction")
        console.log(answer.firstnumber - answer.secondnumber);
    else if (answer.operator === "multiplication")
        console.log(answer.firstnumber * answer.secondnumber);
    else
        console.log('Math Error');
}
