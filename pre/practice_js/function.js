'use strict';

// Function 

// 1. Function declaration 
function showLog(message) {
  console.log(message);
}
showLog('Hi, Charles!');

// 2. Parameters
// premitive parameters : passed by value 
// object parameters : passed by reference
function changeName(obj) {
  obj.name = 'Duke';
}
const profile = { name : 'unknown'};
changeName(profile);
showLog(profile);

// 3. Default parameters
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi');
showMessage('I love you', 'Charles');

// 4. Rest parameters 
function printAll(...args) {
  // for(let i = 0; i < args.length; i++) {
  //   console.log(args[i]);
  // }

  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));

}
printAll('Charles', 'Duke', 'Lion', 'Latte');