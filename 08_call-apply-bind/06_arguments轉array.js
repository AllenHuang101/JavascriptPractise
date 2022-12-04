function foo(num1, num2) {
  console.log(arguments);

  // 1. 自己遍歷
  var newArr = [];
  for(var i=0; i < arguments.length; i++){
    newArr.push(arguments[i] * 10);
  }
  console.log(newArr);

  // 2. arguments轉成array類型
  var newArr2 = Array.prototype.slice.call(arguments);
  console.log(newArr2);

  var newArr3 = [].slice.call(arguments);
  console.log(newArr3);

  // 3. ES6的語法
  var newArr4 = Array.from(arguments);
  console.log(newArr4);

  var newArr5 = [...arguments];
  console.log(newArr5);
}

foo(10, 20, 30, 40, 50);


// var names = ["aaa", "bbb", "ccc", "ddd"];

// var newArr2 = Array.prototype.slice.call(["aaa", "bbb", "ccc"], 0, 4);
// console.log(newArr2);
