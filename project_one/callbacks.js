/*Challenge case scenerio*/

/*
console.log("Start");

function loginUser(email, password) {
  setTimeout(() => {
    return { userEmail: email };
  }, 1500);
}

const user = loginUser("mbuguacaleb30@gmail.com", 12345);

console.log(user);

console.log("finish");
*/

/*Resolving this Challenge*/

/**
 * 1.Introducing a callback to the asynchronous function
 *
 * 2.Wrapping your return value within the callback and then i may access it
 * from a callback function.
 */

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback([`${email}`, "Courageous", "Facing the giants", "flywheel"]);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(`video title is ${video}`);
  }, 1500);
}

const user = loginUser("mbuguacaleb30@gmail.com", 12345, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[1], (title) => {
      console.log(title);
    });
  });
});

console.log("finish");

/*This is a great example on how asynchronous code works*/
/*Callbacks are great the disadvantage is that they lead to a lot of Nesting Up of your code.

This is where Promises and Async Await do help out.


The code especially becomes quite large when i add an onSuccess and an onFailure which are both functions so
as to catch the error.

*/
