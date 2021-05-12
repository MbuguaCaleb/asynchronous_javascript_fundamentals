console.log('1');

console.log('2');

const testCallback = () => {
  setTimeout(() => {
    console.log('Callback');
  }, 2000);
};

testCallback();
console.log('3');

console.log('4');
