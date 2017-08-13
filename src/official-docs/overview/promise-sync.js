console.log('before');

const p = new Promise((res) => {
  res('hello');
}).then(e => console.log(e));

console.log('afterr');
