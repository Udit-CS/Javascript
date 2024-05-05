const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    setTimeout(function () {
        console.log("async task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async complete 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("async 2 resolved");
}); 

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "udit", lastname: "chauhan" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) { // Capitalization corrected and `reject` added
    setTimeout(function() {
        let error = false; 
        if (!error) {
            resolve({ username: "udit", lastname: "chauhan" });
        } else {
            reject("ERROR: something went wrong");
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user.username); // Correctly accessing the username property of user
}).catch(function(error) {
    console.log(error);
}).finally(()=> console.log("the promise is finaaly resolved or rejected" ));
