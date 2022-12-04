// var foo = () => {
//   console.log(arguments);
// }


var foo = (num1, num2, ...args) => {
  console.log(args);
}

foo(10, 20, 30, 40, 50);