var money = prompt( "Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budget:money,
    timeData: time,
    expenses : { },
    optionalExpenses : {},
    income : [],
    savings: false
};
var whatBying = prompt("Введите обязательную статью расходов в этом месяце");
var hawMatch = prompt("Во сколько обойдется?");

appData.expenses.whatBying = whatBying;
appData.expenses.hawMatch = hawMatch;

alert(appData.budget/30);