// Some facts:
// TypeScript - язык программирования на основе JavaScript
// развитие началось в конце 2012 года и проект сразу стал развиваться как OpenSource
// строго типизируемый и компилируемый язык (наподобие други С-подобных языков Java, C#)
// строгая типизация уменьшает количество потенциальных ошибок, которые могли бы возникнуть при разработке на JS
// TS реализует многие концепции ООП (наследованиеб инкапсуляция, полиморфизм, модификаторы доступа и др)
// позволяет быстрее и проще писать большие сложные комплексные программы, соответственно их легче поддерживать, развивать, масштабировать и тестировать
// является кроссплатформенным
// типизировнное надмножество JS: любая программа на JS = программа на TS
// в конечном счете TS - всего лишь инструмент, призванный облегчить разработку приложений

class User {
    name: string;

    constructor(_name: string) {
        this.name = _name;
    }
}

const tom: User = new User("Tom");
const header: HTMLElement | null = document.getElementById("header");
//header.innerHTML = `Привет ${tom.name}`;
// если strictNullChecks true, то
header!.innerText = "Hello Typescript!";

// Типы данных:
// boolean
// number
// string
// Array
// кортежи
// Enum (перечисления)
// Any (произвольный тип)
// Symbol
// null и undefined (как в JS)
// Never (также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку)
// в отличие от javascript мы не можем динамически изменить ранее указанный тип переменной!

//let x: number = 10;
let hello: string = "Hello World";
let isValid: boolean = true;
//hello = 23; // Type 'number' is not assignable to type 'string'

let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName} Возраст: ${age}`;
console.log(info); // Имя Tom    Возраст: 28

// any - описывает данные, тип которых может быть неизвестен на момент написания приложения
let someVar: any = "hello";
console.log(someVar); // string
someVar = 20;
console.log(someVar); // number

var someArray: any[] = [24, "Tom", false];

let x; // any
x = 10; // 10
x = "hello"; // "hello"

let sum: any;
sum = 1200;

if (typeof sum === "number") {
    let result: number = sum / 12;
    console.log(result);
} else {
    console.log("invalid operation");
}

// Параметры ф-ции
function add(a: number, b: number) {
    let result = a + b;
    console.log(result);
}

add(20, 30); // 50
// add("1", "2"); // Argument of type 'string' is not assignable to parameter of type 'number'

let koef: number = 1.5;

function add2(a: number) {
    let result = a * koef;
    console.log(result);
}
add2(20); // 30

// Результат функции
// Функция может возвращать значение определенного типа, которое еще называется типом функции
function add3(a: number, b: number): number {
    return a + b;
}
let result = add3(1, 2);
console.log(result);

// Если функция ничего не возвращает, то указывается тип void
function add4(a: number, b: number): void {
    console.log(a + b);
}
add4(10, 20);

// Необязательные параметры
// В typescript при вызове в функцию должно передаваться ровно столько значений, сколько в ней определено параметров
function getName1(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let name1 = getName1("Иван", "Кузнецов");
//let name2 = getName("Иван", "Михайлович", "Кузнецов"); // Expected 2 arguments, but got 3
//let name3 = getName("Иван");  // An argument for 'lastName' was not provided

// Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные.
// Причем необязательные параметры должны идти после обязательных
function getName2(firstName: string, lastName?: string) {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}

let name2 = getName2("Иван", "Кузнецов");
console.log(name2); // Иван Кузнецов
let name3 = getName2("Вася");
console.log(name3); // Вася


// Значения параметров по умолчанию
function getName3(firstName: string, lastName: string = "Иванов") {
    return `${firstName} ${lastName}`;
}

let name4 = getName3("Иван", "Кузнецов");
console.log(name4); // Иван Кузнецов
let name5 = getName3("Вася");
console.log(name5); // Вася Иванов

function defaultLastName(): string {
    return "Smith";
}

function getName4(firstName: string, lastName: string = defaultLastName()) {
    return `${firstName} ${lastName}`;
}

let name6 = getName4("Tom");
console.log(name6); // Tom Smith


// Тип функции и стрелочные функции

// Каждая функция имеет тип, как и обычные переменные
// Тип функции фактически представляет комбинацию типов параметров и типа возвращаемого значения
// Если функция ничего не возвращает, то фактически тип ее возвращаемого значения - void
function hello2() {
    console.log("Hello TypeScript");
};

// Используя тип функции, мы можем определить переменные, константы и параметры этого типа
let message2: () => void = hello2;
message2();

function sum2(x: number, y: number): number {
    return x + y;
};
function subtract(a: number, b: number): number {
    return a - b;
};

let op: (x: number, y: number) => number; // представляет любую функцию, которая принимает два числа и которая возвращает число

op = sum2;
console.log(op(2, 4));  // 6

op = subtract;
console.log(op(6, 4));  // 2


// Функции как параметры других функций
function sum3(x: number, y: number): number {
    return x + y;
};
function multiply(a: number, b: number): number {
    return a * b;
};

function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {

    return op(x, y);
}
console.log(mathOp(10, 20, sum3)); // 30 
console.log(mathOp(10, 20, multiply)); // 200

// Если определенный тип функции предстоит очень часто использовать, то для него оптимальнее определить псевдоним и обращаться к типу по этому псевдониму
type Operation = (a: number, b: number) => number;

function mathOp2(x: number, y: number, op: Operation): number {

    return op(x, y);
}

let sum4: Operation = function (x: number, y: number): number {
    return x + y;
};

console.log(mathOp2(10, 20, sum4)); // 30


// Стрелочные 
let square = x => x * x;
let hello3 = () => "hello world"
console.log(square(5)); // 25
console.log(hello3());   // hello world

let sum5 = (x: number, y: number) => {
    x *= 2;
    return x + y;
};

let result2 = sum5(15, 35); // 65
console.log(result2);

// Стрелочные функции можно передавать в функцию вместо параметра, который представляет собой функцию
function mathOp3(x: number, y: number, operation: (a: number, b: number) => number): number {
    let result = operation(x, y);
    return result;
}
console.log(mathOp3(10, 20, (x, y) => x + y)); // 30 
console.log(mathOp3(10, 20, (x, y) => x * y)); // 200


// Объединения union
// не являются собственно типом данных, но они позволяют комбинировать или объединить другие типы
// подходит для тех ситуаций, когда логика работы со всеми объединенными типами однообразна
let id: number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 234
function printId(id: number | string) {
    console.log(`Id: ${id}`);
}

function printSentence(words: string[] | string) {
    // если words - строка
    if (typeof words === "string") {
        console.log(words);
    } else {
        // Если words - массив string[]
        console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");


// undefined | null
let userId: number | null = null;

function printId2(id: number | null) {
    if (id === null) {
        console.log("пользователь отсутствует");
    } else {
        console.log(`id пользователя: ${id}`);
    }
}
printId2(userId); // пользователь отсутствует
userId = 45;
printId2(userId); // id пользователя: 45


// Оператор ! (non-null assertion operator)
// позволяет указать, что объект не представляет значение null и undefined
// ставится после объекта, который теоретически может принимать значение null перед обращением к его свойствам и методам
// object!.property
// object!.method()
// не меняет значения объекта, поэтому рекомендуется применять, когда знаем, что объект не равен null или undefined




// Объекты
// let person = { name: "Tom", age: 23 };
// person = { name: "Bob" }; // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
let person: { name: string; age: number } = { name: "Tom", age: 23 };
person = { name: "Bob", age: 35 }; // Норм
console.log(person);
let person2: { name: string; age?: number }; // Свойство age - необязательное
person2 = { name: "Bob" }; // норм
console.log(person2.age); // undefined
if (person2.age !== undefined) {
    console.log(person2.age);
}

// Объекты в функциях
function printUser(user: { name: string; age: number }) {
    console.log(`name: ${user.name}  age: ${user.age}`);
}
let someUser = { age: 36, name: "Tom" };

printUser(someUser);

// Объект как результат функции
function defaultUser(): { name: string; age: number } {
    return { name: "Tom", age: 37 };
}

let userSome = defaultUser();
console.log(`name: ${userSome.name}  age: ${userSome.age}`);

// Оператор in
// if ("key" in obj) {} // Название свойства передается как строка

// Деструктуризация
function printUser2({ name, age }: { name: string; age: number }) {
    console.log(`name: ${name}  age: ${age}`);
}


// Псевдонимы типов
type id = number | string;

let userId2: id = 2;
console.log(`Id: ${userId2}`);
userId2 = "qwerty";
console.log(`Id: ${userId2}`);

// параметр функции представляет псевдоним
function printId3(inputId: id) {
    console.log(`Id: ${inputId}`);
}

// тип результата - псевдоним
function getId(isNumber: boolean): id {
    if (isNumber)
        return 1;
    else
        return "1";
}
// применение функций
printId3(12345);
printId3("qwerty");
console.log(getId(true));

// Особенно полезны псевдонимы, когда мы имеем дело со сложными объектами
type Person = { name: string; age: number };

let fred: Person = { name: "Tom", age: 36 };
let thomas: Person = { name: "Bob", age: 41 };

function printPerson(user: Person) {
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}

printPerson(fred);
printPerson(thomas);


// Расширение псевдонимов
type Human = { name: string; age: number };
type Employee = Human & { company: string }; // расширяет Human



// Массивы - также строго типизированы
// если изначально массив содержит строки, то в будущем он сможет работать только со строками
let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

// Альтернативный способ определения
let names: Array<string> = ["Tom", "Bob", "Alice"];

// ReadonlyArray - поддерживает большинство операций, что и обычные массивы, за исключением операций, которые изменяют массив и его элементы
const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam", "Kate"];
//people[1] = "Kate"; // Index signature in type 'readonly string[]' only permits reading
//people.push("Kate"); // Property 'push' does not exist on type 'readonly string[]'
function usersToString(users: ReadonlyArray<string>): String {
    return users.join(", ");
}
console.log(usersToString(people));
// деструктуризация
const [first, second, third] = people;
const [firstPerson, ...rest] = people;
const [, secondPerson, , forth] = people; // пропускаем первый и третий элементы массива


// Кортежи - в отличие от массивов могут хранить значения разных типов
let user: [string, number];
user = ["Tom", 28];
//userInfo = [28, "Tom"]; // Ошибка (сначала строка, а потом число)

// Необязательные элементы - должны идти в самом конце - после обязательных элементов
let harry: [string, number, boolean?] = ["Bob", 41, true];
let pete: [string, number, boolean?] = ["Tom", 36];


// Заполнение кортежа
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
function printMarks(marks: [string, ...number[]]) {
    for (const mark of marks) {
        console.log(mark);
    }
}
let physics: [...number[], string] = [5, 5, 5, "Physics"];
let chemistry: [string, ...number[], boolean] = ["Chemistry", 3, 3, 4, 5, false];

// readonly кортеж
const readonlyCortezsh: readonly [string, number] = ["Tom", 36];




// Неопределенный набор и наполнение параметров
// // Неопределенный набор параметров
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}

let num1 = addNumbers(3, 7, 8);
console.log(num1); // 18

let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2); // 31

// Наполнение параметров
function summa(...args: number[]): number {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
const numbers = [1, 3, 5, 7, 9] as const; // as const
let num = summa(...numbers);
console.log(num); // 25

// c необязательными параметрами
function summ(a: number, b: number, c?: number): number {
    let result = a + b;
    if (c !== undefined) { result += c; }
    return result;
}
const numbers1 = [1, 3] as const;
let numRes1 = summ(...numbers1);    // a = 1  b = 3
console.log(numRes1); // 4

const numbers2 = [1, 3, 7] as const;
let numRes2 = summ(...numbers2);    // a = 1  b = 3  c = 7
console.log(numRes2); // 11


// Перечисление enum - позволяет определить набор именнованных констант, которые описывают определенные состояния
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current); //
// можем явным образом переопределить значения
enum Season1 { Winter = 5, Spring, Summer, Autumn }; // 5, 6, 7, 8
enum Season2 { Winter = 4, Spring = 8, Summer = 16, Autumn = 32 };
let currentValue: string = Season2[8];
console.log(currentValue); // Spring


// Строковые перечисления
enum Season {
    winter = "Зима",
    spring = "Весна",
    summer = "Лето",
    autumn = "Осень"
};
var currentSeason: Season = Season.summer;
console.log(currentSeason);   // Лето

// Перечисления в функциях
enum DayTime {
    Morning,
    Evening
};

function welcome(dayTime: DayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
let currentDayTime: DayTime = DayTime.Morning;
welcome(currentDayTime); // Доброе утро
welcome(DayTime.Evening); // Добрый вечер

// Параметра-строковое перечисление
enum DayTimeMessage {
    Morning = "Доброе утро",
    Evening = "Добрый вечер"
};
function welcome2(message: DayTimeMessage) {
    console.log(message);
}
let mes: DayTimeMessage = DayTimeMessage.Morning;
welcome2(mes); // Доброе утро
welcome2(DayTimeMessage.Evening); // Добрый вечер