//If resolved then only goes to then
let promise = new Promise( (resolve,reject) => {
    //resolve();
    reject();
});
//chaining
promise
    .then(()=> console.log("Finished"))
    .then(()=> console.log("ran"))
    .catch(() => console.log("caught"))
//console.log(promise);