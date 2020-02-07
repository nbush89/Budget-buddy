class Budget {
  constructor(budget) {
    this.budget = budget;
    this.food = 0;
    this.bills = 0;
    this.entertainment = 0;
    this.clothing = 0;
    this.misc = 0;
    this.expenses = [];
  }
  addExpense(description, amount, type) {
    if (type === "food") {
      this.food += Number(amount);
      this.budget -= Number(this.food);
      this.expenses.push({
        description: description,
        amount: amount,
        type: type
      });
    } else if (type === "bills") {
      this.bills += Number(amount);
      this.budget -= Number(this.bills);
      this.expenses.push({
        description: description,
        amount: amount,
        type: type
      });
    } else if (type === "entertainment") {
      this.entertainment += Number(amount);
      this.budget -= Number(this.entertainment);
      this.expenses.push({
        description: description,
        amount: amount,
        type: type
      });
    } else if (type === "clothing") {
      this.clothing += Number(amount);
      this.budget -= Number(this.clothing);
      this.expenses.push({
        description: description,
        amount: amount,
        type: type
      });
    } else if (type === "misc") {
      this.misc += Number(amount);
      this.budget -= Number(this.misc);
      this.expenses.push({
        description: description,
        amount: amount,
        type: type
      });
    }
  }
}

let budget;
let budgetForm = document.querySelector("#budget-form");
budgetForm.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(budgetForm);
  budget = new Budget(formData.get("budget"));
  budgetForm.style.display = "none";
  budgetForm.reset();
  displayExpenses();
});

// let budget = new Budget(400);
// budget.addExpense("meal", 10, "food");
// budget.addExpense("mcdonalds", 5, "food");
// budget.addExpense("gas", 20, "misc");
// budget.addExpense("cable", 56.78, "bills");
// budget.addExpense("DTE", 67.45, "bills");
// budget.addExpense("H&M", 78.36, "clothing");
// budget.addExpense("concert", 60, "entertainment");
// console.log(budget);
// console.log(budget);

function displayExpenses() {
  let foodExpense = document.querySelector(".food-expense");
  foodExpense.innerText = `Food Expenses: $${budget.food}`;
  let billsExpense = document.querySelector(".bills-expense");
  billsExpense.innerText = `Bill Expenses: $${budget.bills}`;
  let entertainmentExpense = document.querySelector(".entertainment-expense");
  entertainmentExpense.innerText = `Entertainment Expenses: $${budget.entertainment}`;
  let clothingExpense = document.querySelector(".clothing-expense");
  clothingExpense.innerText = `Clothing Expenses: $${budget.clothing}`;
  let miscExpense = document.querySelector(".misc-expense");
  miscExpense.innerText = `Miscellaneous Expenses: $${budget.misc}`;
  let budgetLeft = document.querySelector(".remaining");
  budgetLeft.innerText = `Budget Remaining: $${Number.parseFloat(
    budget.budget
  ).toFixed(2)}`;
  if (budget.budget < 0) {
    alert("You are over budget for the week!");
  }
}

let form = document.querySelector("#expense-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  budget.addExpense(
    formData.get("expense-description"),
    formData.get("expense-amount"),
    formData.get("type")
  );
  form.reset();
  displayExpenses();
});
