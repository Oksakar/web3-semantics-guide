/*for (let i = 0; i < 3; i++) {
  console.log(`The current value of i is: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`j: ${j}`);
  }
  console.log("--------------");
}*/
let input = "Free Willy the while";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log('i is '+ i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is '+ j)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray);
