/**A callback is a function i call after getting my response */
const getTodos = (resource, callback) => {
  /*This is built into Javascript and is used to make HTTP Reqests*/
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      /**JS String into a Javascript Object */
      /**Data is exchanged in string format and not objects(JSON is a good
       * representation of data in String) */
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch the data!', undefined);
    }
  });
  request.open('GET', resource);

  request.send();
};

console.log(1);
console.log(2);

/**A callback function helps me work with the response i get from asynchronous code */
getTodos('caleb.json', (err, data) => {
  console.log(data);
  getTodos('mercy.json', (err, data) => {
    console.log(data);
    getTodos('karanja.json', (err, data) => {
      console.log(data);
    });
  });
});

console.log(3);
console.log(4);
