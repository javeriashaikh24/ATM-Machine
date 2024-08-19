#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Initialize user balance and pin code
let myBalance = 50000;
let myPin = 1234;

//print welcome message
console.log(chalk.blue("\n \tWelcome to Code With IQRA - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([{
    
    name: "pin",
    type: "number",
    message:chalk.yellow("Enter your Pin Code:")
}])
if(pinAnswer.pin === myPin){
   console.log(chalk.green("\nYour pin is Correct, Login Successfully!\n"));



let operationAnswer = await inquirer.prompt([{
    name: "operation",
    type: "list",
    message: "Select an Operation:",
    choices: ["Withdraw Amount", "Check Balance"]
}
])


if(operationAnswer.operation === "Withdraw Amount"){
    let WithdrawAns = await inquirer.prompt([
        {
            name: "WithdrawMethod",
            type: "list",
            message: "Select a withdrawl method:",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ])
    if(WithdrawAns.WithdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select Amount:",
                choices: [500, 1000, 2000, 5000, 10000,20000,40000]
            }
        ])
        if(fastCashAns.fastCash > myBalance){
            console.log(chalk.red("Insufficient Balance"));

        }
        else{
            myBalance -= fastCashAns.fastCash
            console.log(`${fastCashAns.fastCash} withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`)
        }

    }
    if(WithdrawAns.WithdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([{

            name: "amount",
            type: "number",
            message: "Enter the amount to Withdraw: "
        }
    ])
    
     if(amountAns.amount > myBalance){
        console.log(chalk.red("Insufficient Balance"));
     }
     else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount}Withdraw Succesfully`);
        console.log(`Your Remaining Balance is:  ${myBalance}`)
     }
    }
  

}else if(operationAnswer.operation === "Check Balance"){
    console.log(`Your Account Balance is ${myBalance} `);
}
}
else{
    console.log(chalk.red("Pin is Incorrect, Try Again!"));
}