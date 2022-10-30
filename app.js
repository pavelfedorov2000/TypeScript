class User {
    constructor(_name) {
        this.name = _name;
    }
}
const tom = new User("Tom");
const header = document.getElementById("header");
header.innerText = "Hello Typescript!";
let hello = "Hello World";
let isValid = true;
let firstName = "Tom";
let age = 28;
let info = `Имя ${firstName} Возраст: ${age}`;
console.log(info);
let someVar = "hello";
console.log(someVar);
someVar = 20;
console.log(someVar);
var someArray = [24, "Tom", false];
let x;
x = 10;
x = "hello";
let sum;
sum = 1200;
if (typeof sum === "number") {
    let result = sum / 12;
    console.log(result);
}
else {
    console.log("invalid operation");
}
function add(a, b) {
    let result = a + b;
    console.log(result);
}
add(20, 30);
let koef = 1.5;
function add2(a) {
    let result = a * koef;
    console.log(result);
}
add2(20);
function add3(a, b) {
    return a + b;
}
let result = add3(1, 2);
console.log(result);
function add4(a, b) {
    console.log(a + b);
}
add4(10, 20);
function getName1(firstName, lastName) {
    return firstName + " " + lastName;
}
let name1 = getName1("Иван", "Кузнецов");
function getName2(firstName, lastName) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}
let name2 = getName2("Иван", "Кузнецов");
console.log(name2);
let name3 = getName2("Вася");
console.log(name3);
function getName3(firstName, lastName = "Иванов") {
    return `${firstName} ${lastName}`;
}
let name4 = getName3("Иван", "Кузнецов");
console.log(name4);
let name5 = getName3("Вася");
console.log(name5);
function defaultLastName() {
    return "Smith";
}
function getName4(firstName, lastName = defaultLastName()) {
    return `${firstName} ${lastName}`;
}
let name6 = getName4("Tom");
console.log(name6);
function hello2() {
    console.log("Hello TypeScript");
}
;
let message2 = hello2;
message2();
function sum2(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
let op;
op = sum2;
console.log(op(2, 4));
op = subtract;
console.log(op(6, 4));
function sum3(x, y) {
    return x + y;
}
;
function multiply(a, b) {
    return a * b;
}
;
function mathOp(x, y, op) {
    return op(x, y);
}
console.log(mathOp(10, 20, sum3));
console.log(mathOp(10, 20, multiply));
function mathOp2(x, y, op) {
    return op(x, y);
}
let sum4 = function (x, y) {
    return x + y;
};
console.log(mathOp2(10, 20, sum4));
let square = x => x * x;
let hello3 = () => "hello world";
console.log(square(5));
console.log(hello3());
let sum5 = (x, y) => {
    x *= 2;
    return x + y;
};
let result2 = sum5(15, 35);
console.log(result2);
function mathOp3(x, y, operation) {
    let result = operation(x, y);
    return result;
}
console.log(mathOp3(10, 20, (x, y) => x + y));
console.log(mathOp3(10, 20, (x, y) => x * y));
let id;
id = "1345dgg5";
console.log(id);
id = 234;
console.log(id);
function printId(id) {
    console.log(`Id: ${id}`);
}
function printSentence(words) {
    if (typeof words === "string") {
        console.log(words);
    }
    else {
        console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");
let userId = null;
function printId2(id) {
    if (id === null) {
        console.log("пользователь отсутствует");
    }
    else {
        console.log(`id пользователя: ${id}`);
    }
}
printId2(userId);
userId = 45;
printId2(userId);
let person = { name: "Tom", age: 23 };
person = { name: "Bob", age: 35 };
console.log(person);
let person2;
person2 = { name: "Bob" };
console.log(person2.age);
if (person2.age !== undefined) {
    console.log(person2.age);
}
function printUser(user) {
    console.log(`name: ${user.name}  age: ${user.age}`);
}
let someUser = { age: 36, name: "Tom" };
printUser(someUser);
function defaultUser() {
    return { name: "Tom", age: 37 };
}
let userSome = defaultUser();
console.log(`name: ${userSome.name}  age: ${userSome.age}`);
function printUser2({ name, age }) {
    console.log(`name: ${name}  age: ${age}`);
}
let userId2 = 2;
console.log(`Id: ${userId2}`);
userId2 = "qwerty";
console.log(`Id: ${userId2}`);
function printId3(inputId) {
    console.log(`Id: ${inputId}`);
}
function getId(isNumber) {
    if (isNumber)
        return 1;
    else
        return "1";
}
printId3(12345);
printId3("qwerty");
console.log(getId(true));
let fred = { name: "Tom", age: 36 };
let thomas = { name: "Bob", age: 41 };
function printPerson(user) {
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
printPerson(fred);
printPerson(thomas);
let list = [10, 20, 30];
let colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
let names = ["Tom", "Bob", "Alice"];
const people = ["Tom", "Bob", "Sam", "Kate"];
function usersToString(users) {
    return users.join(", ");
}
console.log(usersToString(people));
const [first, second, third] = people;
const [firstPerson, ...rest] = people;
const [, secondPerson, , forth] = people;
let user;
user = ["Tom", 28];
let harry = ["Bob", 41, true];
let pete = ["Tom", 36];
let math = ["Math", 5, 4, 5, 4, 4];
function printMarks(marks) {
    for (const mark of marks) {
        console.log(mark);
    }
}
let physics = [5, 5, 5, "Physics"];
let chemistry = ["Chemistry", 3, 3, 4, 5, false];
const readonlyCortezsh = ["Tom", 36];
function addNumbers(firstNumber, ...numberArray) {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
let num1 = addNumbers(3, 7, 8);
console.log(num1);
let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2);
function summa(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
const numbers = [1, 3, 5, 7, 9];
let num = summa(...numbers);
console.log(num);
function summ(a, b, c) {
    let result = a + b;
    if (c !== undefined) {
        result += c;
    }
    return result;
}
const numbers1 = [1, 3];
let numRes1 = summ(...numbers1);
console.log(numRes1);
const numbers2 = [1, 3, 7];
let numRes2 = summ(...numbers2);
console.log(numRes2);
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
let current = Season.Summer;
console.log(current);
var Season1;
(function (Season1) {
    Season1[Season1["Winter"] = 5] = "Winter";
    Season1[Season1["Spring"] = 6] = "Spring";
    Season1[Season1["Summer"] = 7] = "Summer";
    Season1[Season1["Autumn"] = 8] = "Autumn";
})(Season1 || (Season1 = {}));
;
var Season2;
(function (Season2) {
    Season2[Season2["Winter"] = 4] = "Winter";
    Season2[Season2["Spring"] = 8] = "Spring";
    Season2[Season2["Summer"] = 16] = "Summer";
    Season2[Season2["Autumn"] = 32] = "Autumn";
})(Season2 || (Season2 = {}));
;
let currentValue = Season2[8];
console.log(currentValue);
(function (Season) {
    Season["winter"] = "\u0417\u0438\u043C\u0430";
    Season["spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["summer"] = "\u041B\u0435\u0442\u043E";
    Season["autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
;
var currentSeason = Season.summer;
console.log(currentSeason);
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
let currentDayTime = DayTime.Morning;
welcome(currentDayTime);
welcome(DayTime.Evening);
var DayTimeMessage;
(function (DayTimeMessage) {
    DayTimeMessage["Morning"] = "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E";
    DayTimeMessage["Evening"] = "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440";
})(DayTimeMessage || (DayTimeMessage = {}));
;
function welcome2(message) {
    console.log(message);
}
let mes = DayTimeMessage.Morning;
welcome2(mes);
welcome2(DayTimeMessage.Evening);
//# sourceMappingURL=app.js.map