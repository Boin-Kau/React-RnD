'use strict';

// 1. String concatenation
console.log('my' + 'Cat');
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);

// === strict equality, no type conversion 
console.log(stringFive === numberFive);

// 3. Conditional Operators : if, else if, else
const myName = 'charles';
if(myName === 'duke') {
  console.log('My name is duke!');
} else if(myName === 'charles') {
  console.log(`My name is ${myName}!`);
} else {
  console.log('unknown');
}

// 4. Ternary Operator 
// conditions ? value1 : value2;
console.log(myName === 'Bear' ? 'same' : 'different');

// 5. Switch statement
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('IE');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('Not an IE');
  default:
    console.log('default value');
    break;
}


// 6. Loops
// while
let i = 3;
while(i > 0) {
  console.log(`while : ${i}`);
  i--;
}

// do-while
let j = 4;
do {
  console.log(`while : ${j}`);
  j--;
} while(j > 0);

// for loop
for(let i = 3; i > 0; i--) {
  console.log(`for loop : ${i}`);
}


