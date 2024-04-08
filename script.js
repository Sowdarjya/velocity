let income = 0;
let expenses = 0;

function addIncome() {
  let incomeInput = document.getElementById("income");
  let amount = parseFloat(incomeInput.value);
  if (!isNaN(amount)) {
    income += amount;
    incomeInput.value = ""; // Clear input field
    displayBalance();
  } else {
    alert("Please enter a valid income amount.");
  }
}

function addExpense() {
  let expenseInput = document.getElementById("expense");
  let amount = parseFloat(expenseInput.value);
  if (!isNaN(amount)) {
    expenses += amount;
    expenseInput.value = ""; // Clear input field
    displayBalance();
  } else {
    alert("Please enter a valid expense amount.");
  }
}

function calculateBalance() {
  return income - expenses;
}

function displayBalance() {
  let balance = calculateBalance();
  let balanceDisplay = document.getElementById("balance");
  balanceDisplay.textContent = "Remaining balance: $" + balance.toFixed(2);

  // Displaying remaining balance in a separate div
  let remainingBalanceDisplay = document.getElementById("remaining-balance");
  remainingBalanceDisplay.textContent = "Remaining balance: $" + balance.toFixed(2);
}