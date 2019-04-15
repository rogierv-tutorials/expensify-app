const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong');
  }, 1000);
});

console.log('before');

promise.then(data => console.log(data)).catch(error => console.error(error));

console.log('after');
