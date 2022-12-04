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
});

console.log(objProxy.name);
console.log(objProxy.age);

objProxy.name = 'kobe';
objProxy.age = 30;

console.log(obj.name);
console.log(obj.age);
