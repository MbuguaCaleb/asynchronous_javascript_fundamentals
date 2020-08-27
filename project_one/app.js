//synccode example

//synchronous code execution

/*
function otherFunct() {
  console.log("we are inside a function");
  console.log("this function has executed");
}

console.log("start");

otherFunct();

console.log("end");
*/

//Async Example

console.log("start");

setTimeout(() => {
  console.log("We are in time out");
}, 2000);

console.log("end");


 