const person = {
  firstName: 'Phuc',
  lastName: 'Nguyen',
  age: 200,
  job: 'student',
  skills: ['HTML', 'CSS', 'Javascript', 'React'],
  isMarried: true,
  getPersonInfo() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person);
console.log(person.getPersonInfo());

const rectangle = {
  length: 100,
  width: 20,
  getAreaOfRectangle() {
    return this.length * this.width;
  },
};
console.log(rectangle.getAreaOfRectangle());

const personAccount = {
  firstName: 'Phuc',
  lastName: 'Nguyen',
  incomes: { Salary: 1000, OnlineTime: 2000, KELA: 600 },
  expenses: { Home: 500, food: 200 },
  totalIncomes() {
    // let total = 0;
    // for (const key in this.incomes) {
    //   total += this.incomes[key];
    // }
    // return total;
    return Object.values(this.incomes).reduce((total, num) => total + num);
  },
  totalExpenses() {
    return Object.values(this.expenses).reduce(function(total, num) {
      return total + num;
    });
  },
  addIncome(nameIncome, numIncome) {
    this.incomes[nameIncome] = numIncome;
    console.log(`add income ${nameIncome}:${numIncome}`);
  },
  addExpenses(nameExpense, numExpense) {
    this.incomes[nameExpense] = numExpense;
  },
  accountBalance() {
    return this.totalIncomes() - this.totalExpenses();
  },
};

console.log('personAccount');
console.log(personAccount); // why it also change the first one
console.log('totalIncomes ', personAccount.totalIncomes());
console.log('totalExpenses ', personAccount.totalExpenses());
console.log('accountBalance ', personAccount.accountBalance());

personAccount.addIncome('partTime', 1000);
console.log(personAccount);
console.log('new totalIncomes ', personAccount.totalIncomes());
console.log('new totalExpenses ', personAccount.totalExpenses());
console.log('new accountBalance ', personAccount.accountBalance());
