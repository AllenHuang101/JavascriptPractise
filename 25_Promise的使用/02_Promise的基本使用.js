function foo() {
  return new Promise((resolve, reject) => {
    // resolve('success message');
    reject('failture message');
  });
}

const fooPromise = foo();

// then 方法傳入的兩個回調函數,
// > 第一個會在 Promise 執行 resolve 函數時被回調
// > 第二個會在 Promise 執行 reject 函數時被回調
fooPromise.then(
  (res) => {
    console.log('請求成功:', res);
  },
  (err) => {
    console.log('請求失敗:', err);
  }
);

// 傳入的這個函數，被稱之為 executor
// > resolve: 回調函數, 成功時回調
// > reject: 回調函數, 失敗時回調
const promise = new Promise((resolve, reject) => {
  // executor 立即執行

  console.log('promise傳入的函數被執行了');
});

promise.then(
  () => {},
  () => {}
);
