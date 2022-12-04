function requestData(url) {
  // 異步請求的代碼會被放入到 executor 中
  return new Promise((resolve, reject) => {
    // 模擬網路請求
    setTimeout(() => {
      // 拿到請求的結果

      if (url === '/api/success') {
        let names = ['abc', 'cba', 'nba'];
        resolve(names);
      } else {
        let errMessage = '請求失敗';
        reject(errMessage);
      }
    }, 3000);
  });
}

const promise = requestData('/api/success');

promise.then(
  (res) => {
    console.log('請求成功:', res);
  },
  (err) => {
    console.log('請求失敗:', err);
  }
);
