function foo(num1, num2, num3) {
  console.log(num1, num2, num3);
  console.log(arguments);

  // 1. 獲取參數的長度
  console.log(arguments.length);

  // 2. 根據索引獲取某一個參數
  console.log(arguments[2]);

  // 3. 獲取arguments所在的函數
  console.log(arguments.callee);
}


foo(10, 20, 30, 40, 50)

