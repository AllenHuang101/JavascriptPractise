console.log('script start');

setTimeout(() => {
  console.log('setTimeout execute');
}, 1000);

queueMicrotask(() => {
  console.log(queueMicrotask);
});
console.log('script end');
