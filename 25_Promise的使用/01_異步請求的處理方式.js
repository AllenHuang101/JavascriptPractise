/*
 *
 *
 */

function requestData(url, successCallback, failtureCallback) {
  // 模擬網路請求
  setTimeout(() => {
    // 拿到請求的結果

    if (url === '/api/success') {
      let names = ['abc', 'cba', 'nba'];
      successCallback(names);
    } else {
      let errMessage = '請求失敗';
      failtureCallback(errMessage);
    }
  }, 3000);
}

requestData(
  '/api/success',
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 更好的方案 Promise承諾(規範好了所有的代碼編寫邏輯)
