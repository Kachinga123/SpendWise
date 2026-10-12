let totalBudget = Number(prompt("Enter your total budget in KSh:"));
let totalExpenses  Number(prompt("Enter your total expenses in KSh:"));
let remainingBalance = calculateBalance(totalBudget, totalExpenses);


console.log();
console.log();
console.log();


function calculateBalance(budget, expenses) {
    return budget - expenses;
}

function displayBudgetSummary() {
    console.log("===== SpendWise Budget Summary =====");
    console.log("Total Budget: KSh " + totalBudget);
    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);
}

displayBudgetSummary();


if (totalBudget <= 0 || totalExpenses < 0) {
    console.log("Error: Enter a budget above 0 and expenses of 0 or more.");
} else {
    remainingBalance = calculateBalance(totalBudget, totalExpenses);
    displayBudgetSummary();
}
