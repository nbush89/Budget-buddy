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

  // console.log(budget.expenses);

  budget.expenses.forEach(expense => {
    if (expense.type === "food") {
      let foodItem = document.createElement("p");
      foodItem.innerText = `${expense.description}: $${expense.amount}`;
      document.querySelector("#food-receipt").append(foodItem);
    } else if (expense.type === "bills") {
      let billsItem = document.createElement("p");
      billsItem.innerText = `${expense.description}: $${expense.amount}`;
      document.querySelector("#bills-receipt").append(billsItem);
    } else if (expense.type === "entertainment") {
      let entertainmentItem = document.createElement("p");
      entertainmentItem.innerText = `${expense.description}: $${expense.amount}`;
      document
        .querySelector("#entertainment-receipt")
        .append(entertainmentItem);
    } else if (expense.type === "clothing") {
      let clothingItem = document.createElement("p");
      clothingItem.innerText = `${expense.description}: $${expense.amount}`;
      document.querySelector("#clothing-receipt").append(clothingItem);
    } else {
      let miscItem = document.createElement("p");
      miscItem.innerText = `${expense.description}: $${expense.amount}`;
      document.querySelector("#misc-receipt").append(miscItem);
    }
  });
  if (budget.budget < 0) {
    alert("You are over budget for the week!");
  }
}

let form = document.querySelector("#expense-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#food-receipt").innerHTML = "";
  document.querySelector("#bills-receipt").innerHTML = "";
  document.querySelector("#entertainment-receipt").innerHTML = "";
  document.querySelector("#clothing-receipt").innerHTML = "";
  document.querySelector("#misc-receipt").innerHTML = "";
  const formData = new FormData(form);
  budget.addExpense(
    formData.get("expense"),
    formData.get("expense-amount"),
    formData.get("type")
  );
  form.reset();
  displayExpenses();
});

let receiptDisplay = document.querySelector(".total-expenses");
receiptDisplay.addEventListener("click", e => {
  if (e.target.className === "fas fa-receipt food") {
    document.querySelector("#food-receipt").classList.toggle("show");
  } else if (e.target.className === "fas fa-receipt bills") {
    document.querySelector("#bills-receipt").classList.toggle("show");
  } else if (e.target.className === "fas fa-receipt entertainment") {
    document.querySelector("#entertainment-receipt").classList.toggle("show");
  } else if (e.target.className === "fas fa-receipt clothing") {
    document.querySelector("#clothing-receipt").classList.toggle("show");
  } else if (e.target.className === "fas fa-receipt misc") {
    document.querySelector("#misc-receipt").classList.toggle("show");
  }
});
