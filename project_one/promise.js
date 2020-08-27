/*A promise is an object that gives us the result of asynchronous 
operation or the failure of an asynchronous operation*/

/*Simple Example*/

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ user: "caleb" });
    reject(new Error("user not logged in!"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));


*/

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
      //reject(new Error("user not logged in!"));
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`${email}`, "Courageous", "Facing the giants", "flywheel"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`video title is ${video}`);
      reject("testing error catching");
    }, 1500);
  });
}

loginUser("mbuguacaleb30@gmail.com", 12345)
  .then((user) => {
    const userEmail = user.userEmail;
    getUserVideos(userEmail).then((videos) => {
      videoDetails(videos[1]).then((detail) => console.log(detail));
    });
  })
  .catch((err) => console.log(err.message));

console.log("finish");

/*Executing Prommise All*/

/*This is the case scnerio where i do not want promise one to wait for promise two*/

/*All promises will therefore be executed within the maximum execution time*/

/*Taking therefore i am taking related data from facebook or youtube it therefore means that all
of the data shall come at the same time and also it can be run asynchronously giving time for other
processes to take place*/

const youtube = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting data from youtube");
    resolve(["video1", "video2", "video3"]);
  }, 2000);
});

const facebook = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting data from facebook");
    resolve(["title1", "title2", "title3"]);
  }, 4000);
});

Promise.all([youtube, facebook]).then((result) => {
  console.log(result);
});

/*What is being returned at the resolve is a function parameter of in the then 

You may now 

/*It is good Practice to use the error object when returning 
the error message*

I have access to the message porperty
*/
