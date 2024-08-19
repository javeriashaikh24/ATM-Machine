#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
// Initialize user balance and pin code
var myBalance = 50000;
var myPin = 1234;
//print welcome message
console.log(chalk_1.default.blue("\n \tWelcome to Code With IQRA - ATM Machine\n"));
var pinAnswer = await inquirer_1.default.prompt([{
        name: "pin",
        type: "number",
        message: chalk_1.default.yellow("Enter your Pin Code:")
    }]);
if (pinAnswer.pin === myPin) {
    console.log(chalk_1.default.green("\nYour pin is Correct, Login Successfully!\n"));
    var operationAnswer = await inquirer_1.default.prompt([{
            name: "operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        var WithdrawAns = await inquirer_1.default.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a withdrawl method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (WithdrawAns.WithdrawMethod === "Fast Cash") {
            var fastCashAns = await inquirer_1.default.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [500, 1000, 2000, 5000, 10000, 20000, 40000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk_1.default.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log("".concat(fastCashAns.fastCash, " withdraw successfully"));
                console.log("Your Remaining Balance is: ".concat(myBalance));
            }
        }
        if (WithdrawAns.WithdrawMethod === "Enter Amount") {
            var amountAns = await inquirer_1.default.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw: "
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk_1.default.red("Insufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log("".concat(amountAns.amount, "Withdraw Succesfully"));
                console.log("Your Remaining Balance is:  ".concat(myBalance));
            }
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log("Your Account Balance is ".concat(myBalance, " "));
    }
}
else {
    console.log(chalk_1.default.red("Pin is Incorrect, Try Again!"));
}
