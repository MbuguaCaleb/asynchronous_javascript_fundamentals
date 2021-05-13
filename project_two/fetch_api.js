//async and await
const getTodos = async () => {
  const response1 = await fetch('calebd.json');

  if (response1.status !== 200) {
    throw new Error('Cannot fetch  the data');
  }
  const data1 = await response1.json();
  const response2 = await fetch('mercy.json');
  const data2 = await response2.json();
  const response3 = await fetch('karanja.json');
  const data3 = await response3.json();

  const results = [];

  results.push(data1, data2, data3);

  return results;
};

/*Rember that an asynchronous function returns a 
promise*/
/*I must run .then when calling it*/

console.log(1);
console.log(2);
const data = getTodos()
  .then((data) => console.log('resolved', data))
  .catch((err) => console.log('rejected', err.message));

console.log(3);
console.log(4);
//fetch API
// fetch('caleb.json')
//   .then((response) => {
//     console.log('resolved', response);
//     //to get data via the fetch api i must call the json method
//     //the process of getting that data is also a promise and therefore
//     //i must use .then
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log('rejected', err);
//   });
