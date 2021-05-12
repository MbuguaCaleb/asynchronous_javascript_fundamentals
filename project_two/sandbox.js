/**A callback is a function i call after getting my response(receiving data which takes sometime) */
const getTodos = (resource) => {
  /*This is built into Javascript and is used to make HTTP Reqests*/
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        /**JS String into a Javascript Object */
        /**Data is exchanged in string format and not objects(JSON is a good
         * representation of data in String) */
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });
    request.open('GET', resource);

    request.send();
  });
};

getTodos('caleb.json')
  .then((data) => {
    console.log('promise 1 resolved', data);
    return getTodos('mercy.json');
  })
  .then((data) => {
    console.log('promise 2 resolved', data);
    return getTodos('karanja.json', data);
  })
  .then((data) => {
    console.log('promise 3 resolved', data);
  })
  .catch((err) => console.log('promise rejected', err));
/**A callback function helps me work with the response i get from asynchronous code */

/**Callback hell */
/*
getTodos('caleb.json', (err, data) => {
  console.log(data);
  getTodos('mercy.json', (err, data) => {
    console.log(data);
    getTodos('karanja.json', (err, data) => {
      console.log(data);
    });
  });
});
*/

/*Promises*/
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    // resolve('some data');
    //reject('error occured');
  });
};

/*when promise resolves i run */
/*It first of all fires the resolve, then goes
to the reject*/

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
