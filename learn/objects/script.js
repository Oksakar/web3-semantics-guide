//СИНТАКСИС
/*
// Создание объекта

let userInfo = new Object(); // синтаксис "конструктор объекта"
let userInfo = {};  // синтаксис "литерал объекта"
*/

//-----------------
// Свойства объектов. Ключ + значение

//У каждого свойства есть ключ
//(также называемый «имя» или «идентификатор»).
//После имени свойства следует двоеточие ":",
//и затем указывается значение свойства.
//Если в объекте несколько свойств,
//то они перечисляются через запятую.

/*
let userInfo = {
	name: "Вася", // Свойство объекта
	age: 30, // Последняя (висячая) запятая
};

console.log(userInfo);
console.log(userInfo.name);
*/
//---------------------------------------------
// Имена свойств
/*
// Имя из двух и больше слов
let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true,
};
console.log(userInfo.name);
console.log(userInfo['name']);
console.log(userInfo["likes javascript"]);

*/
//-----------------
// Вычисляемое либо передаваемое имя
/*
// Вычисляем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);
*/
//-----------------
/*
// Передаем имя
let firstPart = "likes";
let userInfo = {
	name: "Вася",
	age: 30,
	[firstPart]: true,
};
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
//let key = "name";
//console.log(userInfo[key]);
*/
//-----------------
/*
// Зарезервированные слова в именах
let userInfo = {
	let: "Вася",
	for: 30,
};
console.log(userInfo.let);
console.log(userInfo.for);
*/
//-----------------
/*
// Имена = строки либо символы

let userInfo = {
	0: "Вася", // 0 тоже самое что "0"
};
console.log(userInfo[0]);
console.log(userInfo["0"]);
*/
//-----------------

/*
// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");
let userInfo = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение"
};
console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.
*/
//---------------------------------------------
// Вложенность
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);
*/

//---------------------------------------------
/*
// Свойство из переменной

function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//------------------
/*
function makeUserInfo(name, age) {
	return {
		name, // Тоже самое что и  name: name,
		age,// Тоже самое что и  age: age,
		"likes javascript": true,
		// ...другие свойства
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);
*/
//---------------------------------------------
// Изменение объекта
/*
// Добавление свойства
let userInfo = {
	name: "Вася",
}

console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo['likes javascript'] = true;

console.log(userInfo);

userInfo.address = {
	city: "Uzhhorod",
	street: "Freedom",
};

console.log(userInfo);
*/
//------------------
/*
// Удаление свойства

let userInfo = {
	name: "Вася",
	age: 30,
	"likes javascript": true
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);

*/
//------------------
// Изменение свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//------------------
/*
// Изменение свойства даже в константе

const userInfo = {
	name: "Вася",
	age: 30,
}
console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);
*/

//---------------------------------------------

/*
// Копирование объектов

// При копировании объекта в другую переменную
// сам объект не дублируется, а копируется только ссылка на него

let userInfo = {
	name: "Вася",
	age: 30,
}

console.log(userInfo);

let user = userInfo;

console.log(user);

user.age = 18;

console.log(userInfo);
*/

//-------------------

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/
//-------------------
/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/

//---------------------------------------------
// Проверка существования свойства
/*
let userInfo = {
	name: "Вася",
	age: 30,
}
//console.log(userInfo.age);

if (userInfo.age) { // true или false
	console.log(userInfo.age);
}
*/
//--------------------
// Опциональная цепочка
/*
let userInfo = {
	name: "Вася",
	age: 30,
	//address: {
	//	city: "Uzhhorod",
	//	street: "Freedom",
	//}
}
//console.log(userInfo.address.street);
console.log(userInfo?.address?.street);

*/
//--------------------
// Оператор "in"
/*
let userInfo = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}
*/
//--------------------

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует,
//но содержит значение undefined.
//В этом случае необходимо использовать "in".

/*
let userInfo = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo.name) { // false
	console.log(userInfo.name);
}
if ("name" in userInfo) { //true
	console.log(userInfo.name);
}
*/

//---------------------------------------------

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}
*/

//-----------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo[key]); // Вася, 30, Object {}
}

for (let key in userInfo.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo.address[key]); // Uzhhorod, Freedom
}*/

//---------------------------------------------
// Методы объекта
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	//showInfo: function () {
	//	console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	//}
	showInfo() {
		console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();
*/

//----------------------
// Использование "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
	}
}
userInfo.showInfo();
*/
//----------------------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		//function show() {
		//	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//}

		// У стрелочной функции нет своего "this" используются
		// значение из внешнего метода userInfo.showInfo()
		let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		show();
	}
}
userInfo.showInfo();
*/
//----------------------
// Преимущество "this"
/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	},
	showInfo() {
		console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
		//console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
	}
}
userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/
//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/

/*
Когда мы пишем наш код, используя объекты для представления сущностей реального мира,
– это называется объектно - ориентированное программирование или сокращённо: «ООП».

ООП является большой предметной областью и интересной наукой само по себе.
Как выбрать правильные сущности ? Как организовать взаимодействие между ними ?
Это – создание архитектуры, и есть хорошие книги по этой теме,
такие как «Приёмы объектно - ориентированного проектирования.
Паттерны проектирования» авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон,
Джон Влиссидес или «Объектно - ориентированный анализ и проектирование с примерами приложений»
Гради Буча, а также ещё множество других книг.
*/

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1 (верна ли запись)
const userInfo = {
	name: "Вася"
	age: 30
}

// Задача №2 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	"58": 'Значение свойства'
}
console.log(userInfo[58]);

// Задача №3 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30
}
let user = userInfo;
user.age = 45;

console.log(userInfo.age);

// Задача №4 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
userInfo = null;
user.showInfo();

 Задача №5 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}

// Задача №6 (что будет в консоли?)
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod"
	}
}
for (const key in userInfo.address) {
	console.log(userInfo.address[key]);
}

// Задача №7 (верна ли запись)
const userInfo = {
	name: "Вася",
	age: 30,
	"likes js": true
}
console.log(userInfo."likes js");
*/
// Задача №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/
const userInfo = {
  name: "Вася",
  age: 30,
};

userInfo.name = "Лена";
delete userInfo.name;
console.log(userInfo);
