import inquirer from "inquirer";

interface userAnswer {
    userID : string;
    userPIN : number;
    accountTYPE: string;
    transactionType: string;
    amount : number;
}

async function startATMConversetion(){
    console.log("Welcome to Azadi Bank!");


const answer : userAnswer =await inquirer.prompt([
    {
        type : "input",
        name : "userID",
        message : "kindly enter your user ID :"
    },
    {
        type : "number",
        name : "userPIN",
        message : "kindly enter your user PIN :"
    },
    {
        type : "list",
        name : "accountType",
        choices: ["current", "saving"],
        message : "Select your AccountType:"
    },
    {
        type : "list",
        name : "transactionType",
        choices: ["fastcash withdrawal", "normal withdrawal"],
        message : "Select your transactionType:",
        when (answers){
            return answers.accountType
        }
    },
    {
        type : "list",
        name : "amount",
        choices: [500, 1000, 2000, 3000, 4000, 5000, 10000 ],
        message : "Select your amount:",
        when (answers){
            return answers.transactionType === "fastcash withdrawal"
        }
    },
    {
        type : "number",
        name : "amount",
        message : "enter your amount:",
        when (answers){
            return answers.transactionType === "normal withdrawal"
        }
    },
]);

if (answer.userID && answer.userPIN){
    console.log("processing your request...");
    const balance = Math.floor(Math.random()*100000000);
    console.log("Your current balance is: PKR", balance.toLocaleString());
    const enteredApmount = answer.amount;

    if (balance >= enteredApmount){
        const remainingBalance = balance - enteredApmount;
        console.log("Transaction is successfull. your remaining balance is: PKR", remainingBalance.toLocaleString());
    } else {
        console.log("Insuffiicient balance. Please try again with  a lower amount.");
    }

}

}

startATMConversetion();
