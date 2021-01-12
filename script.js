//1 
let myNewArray = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
let sum = 0;
for (i = 0; i < myNewArray.length; i++)
    if (parseInt(myNewArray[i]) >= 0 || parseInt(myNewArray[i]) <= 0) {
        sum += +(myNewArray[i])
    }
alert(sum)


//2
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.random().toFixed(2));
    for (let j = 0; j < arr.length; j++) { }
    console.log(arr[i] ** 5)
}


//3
let arr = ["AngularJS", "jQuery"];
arr.unshift("Backbone.js");
arr.push("ReactJS", "Vue.js");
arr.splice(1, 0, "CommonJS");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "jQuery") {
        alert(arr[i] + " - Это здесь лишнее")
        delete arr[i]
    }
}


//4
let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split(" ");
let lastElement = arr.pop();
let secondElement = arr.splice(1, 1) + "";
arr.splice(4, 0, lastElement);
arr.splice(3, 0, secondElement);
newStr = arr.join(" ");
alert(str);
alert(newStr);


//5

let person = {
    name: "John",
    age: 25,
    country: "Ukraine",
    married: true
};
let option = prompt("Введите свойство");
if (option in person) {
    alert(person[option])
} else {
    person[option] = prompt("Введите значение свойства")
};


//6
let phone = {};
phone.brand = prompt("Введте бренд телефона");
phone.model = prompt("Введите модель телефона");
phone.resolution = prompt("Введите разрешение экрана");
phone.color = prompt("Введите цвет телефона");
person.phone = phone;


//7
let dates = {};
let now = new Date();
let userDate = new Date(prompt("Введите дату в формате yyyy-MM-dd"));
dates.today = now.toDateString();
dates.yearBefore = new Date(now.setDate(now.getDate() - 365)).toDateString();
if (new Date(userDate) <= new Date(dates.today) && new Date(userDate) >= new Date(dates.yearBefore)) {
    console.log("Верно")
} else {
    console.log("Не верно")
};



//8
let arr = [];
for (; ;) {
    let userNumber = prompt('Введите любое число или символ');
    if (userNumber !== null) {
        arr.push(userNumber)
    } else {
        break
    }
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) >= 0 || parseInt(arr[i]) <= 0) {
        sum += +(arr[i])
    }
} alert(sum);


//9
let multiplicationTable = [];
for (i = 1; i < 10; i++) {
    multiplicationTable[i] = []
    for (j = 2; j <= 10; j++) {
        multiplicationTable[i].push(`${i}x${j}=${i * j}`);
    }
}
console.log(multiplicationTable);


//10
let htmlImg = {
    src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: '',
    style: 'border: 1px solid #ccc',
    width: 200
};
console.log(htmlImg);