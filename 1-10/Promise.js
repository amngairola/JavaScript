/*
Creates a new Promise.
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error
*/
// --------------way 1 of create a new promise
const Promise1 = new Promise((resolve, reject) => {
  //   Do an ascync task
  setTimeout(() => {
    console.log("task is complete");
    resolve();
  }, 1000);
});

// consumin the promise with a value or the result of another promise,
Promise1.then(() => {
  //.then is used to resolve the promise
  console.log("promise consumed");
});

//--------------------WAY 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task2 resolved");
});

//passing data from promise
const Promsise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Aman Gairola", email: "amngairola@.com" });
  }, 1000);
});
Promsise3.then((user) => {
  //resiving users data from the promise
  console.log(user);
});

//handling error from promise
const Promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Aman Gairola", email: "amngairola@.com" });
    } else {
      reject("Error :somthing went wrong");
    }
  }, 1000);
});

Promise4.then((user) => {
  console.log(user); //it will log the user object
  return user.username; //returning the user name
})
  .then((username) => {
    //to handle the return value of the above .then() ,we need to recive it in new .then method
    console.log(username);
  })
  .catch((err) => {
    //to hendel the error object
    console.log(err);
  })
  .finally(() => console.log("finally promise is completed")); //it will always exicute

//handling with async await
const promsise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Java script", email: "123qwe" });
    } else {
      reject("Error :js went wrong");
    }
  }, 1000);
});

// async function consume5() {
const consume5 = async () => {
  try {
    const response = await promsise5; //waiting for the responce
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consume5();

/*
const getUser = async () => {
  try {
    const url = "https://api.github.com/users/amngairola";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUser();
*/
// doing it with .then .catch
const url = "https://api.github.com/users/amngairola";

// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

/*   ##------interview important--------##
 A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
