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
  incomes: [ {Salary: 1000}, {OnlineTime: 2000}],
  expenses: [ {Home: 500}, {food: 200 }],
  accountInfo(){
    console.log(`My name ${this.firstName} ${this.lastName}`);
    console.log('My income: ')
    this.incomes.forEach(element => {
      console.log( Object.entries(element).toString());
    });
    console.log('My expenses: ')
    this.expenses.forEach(element => {
      console.log( Object.entries(element).toString());
    });
    
  },
  totalIncomes() { 
    // return Object.values(this.incomes[0]); [1000]
    total= 0;
    for (let index = 0; index < this.incomes.length; index++) 
    {
      total=total+ (Object.values( this.incomes[index])[0]);
    }
    return total
    // return (this.incomes).reduce((total, num) => {total + Object.values(num)[0]});
  },
  totalExpenses() {
    // return Object.values(this.expenses).reduce(function(total, num) {
      // return total + num;
    // });
    total= 0;
    for (let index = 0; index < this.expenses.length; index++) 
    {
      total=total+ (Object.values( this.expenses[index])[0]);
    }
    return total
  },
  addIncome(nameIncome, numIncome) {
    const obj={};
    obj[nameIncome]=numIncome;
    this.incomes.push(obj)
    console.log(`add income ${nameIncome}:${numIncome}`);
  },
  addExpenses(nameExpense, numExpense) {
    this.expenses.push({nameExpense:numExpense})
  },
  accountBalance() {
    return this.totalIncomes() - this.totalExpenses();
  },
};


console.log('personAccount');
console.log(personAccount);
personAccount.accountInfo(); // why it also change the first one
console.log('totalIncomes ', personAccount.totalIncomes());
console.log('totalExpenses ', personAccount.totalExpenses());
// console.log('accountBalance ', personAccount.accountBalance());
console.log('-------');

personAccount.addIncome('partTime', 1000);
console.log(personAccount);
personAccount.accountInfo(); // why it also change the first one
console.log('new totalIncomes ', personAccount.totalIncomes());
console.log('new totalExpenses ', personAccount.totalExpenses());
// console.log('new accountBalance ', personAccount.accountBalance());
