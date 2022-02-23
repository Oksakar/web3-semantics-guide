/*const animal = "cat";

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}*/
/*for (let i = 0; i < 10; i += 3) {
  console.log(i);
}*/
/*const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

for (let item of groceryList) {
  console.log("I love " + item);
}


let arr = [1, 2, 3, 4, 5];*/
// let spaceship = {
//   passengers: [
//     {
//       pass1: {
//         name: "Oksana",
//         age: 39,
//       },
//       pass2: {
//         name: "Dima",
//         age: 42,
//       },
//     },
//   ],
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032,
//   },
//   crew: {
//     captain: {
//       name: "Sandra",
//       degree: "Computer Engineering",
//       encourageTeam() {
//         console.log("We got this!");
//       },
//       "favorite foods": ["cookies", "cakes", "candy", "spinach"],
//     },
//   },
//   engine: {
//     model: "Nimbus2000",
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD",
//     },
//     "back-up": {
//       battery: "Lithium",
//       terabytes: 50,
//     },
//   },
// };
// let capFave = spaceship.crew.captain["favorite foods"][0];
// let firstPassenger = spaceship.passengers[0].pass1.age;
// console.l.og(firstPassenger);

// const array = [];
// for (let i = 2; i < 51; i++) {
//   if ((i + 1) % 2 === 0) {
//     console.log(i);
//   }
// }
// var arr = [];

// for (var i = 0; i < 50; i++) {
//   if (i % 2 === 0) {
//     arr.push(i);
//   }
// }

// console.log(arr);

// var arr = [];
// for (var i = 50; i > 0; i--) {
//   if (i % 3 === 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// var arr = [];
// for (var i = 0; i > 50; i++) {
//   arr.push(i);
// }
// console.log(arr);
// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr.push(i * i);
// }
// console.log(arr);
// var arr = [];
// var count = 0;
// for (var i = 0; i < 20; i++) {
//   arr.push(i);
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);
var arr = [];
var count = 0;
for (var i = 0; i < 10; i++) {
  arr.push(i);
  if (arr[i] % 3 === 0) {
    count++;
  }
}
// console.log(count);
// var arr = [];
// var count = 0;
// for (var i = 0; i < 10; i++) {
//   arr.push(i);
//   const isDividableByThree = arr[i] % 3 === 0;
//   const isNotDividableBySeven = arr[i] % 7 !== 0;

//   if (isDividableByThree && isNotDividableBySeven) {
//     count++;
//   }
// }
// console.log(count);
// var arr = [];
// for (var i = 0; i < 10; i++) {
//   if (i % 3 === 0 && i % 7 !== 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());

// console.log(
//   points.sort(function (a, b) {
//     return a - b;
//   })

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return Math.pow(l, 2);
  } else {
    return (l + w) * 2;
  }
};
console.log(areaOrPerimeter(4, 3));
