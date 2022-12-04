const obj = {
  name: 'why',
  age: 18,
};

const objProxy = new Proxy(obj, {
  // 獲取值時的捕獲器
  // target: 代理的對象
  get: function (target, key) {
    console.log(`監聽到對象的${key}属性被訪問了`, target);
    return target[key];
  },

  // 設置值時的捕獲器
  set: function (target, key, newValue) {
    console.log(`監聽到對項的${key}屬性被設置了`, target);
    target[key] = newValue;
  },

  // 監聽 in 的捕獲器
  has: function (target, key) {
    console.log(`監聽到對項的${key}屬性in操作`, target);
    return key in target;
  },

  // 监听delete的捕获器
  deleteProperty: function (target, key) {
    console.log(`监听到对象的${key}属性in操作`, target);
    delete target[key];
  },
});

// in操作符
// console.log("name" in objProxy)

// delete操作
delete objProxy.name;
