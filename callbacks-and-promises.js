// //callback
// function doSomething(callback) {
//     setTimeout(function() {
//         //did somenthing
//         callback('Firts data');
//     }, 1000);
// }

// function doOtherThing(callback) {
//     setTimeout(function() {
//         //did somenthing
//         callback('Second data');
//     }, 1000);
// }

// function doAll() {
//     doSomething(function(data) {
//         var processedData = data.split('');

//         doOtherThing(function (data2) {
//             var processedData2 = data2.split('');

//             setTimeout(function() {
//                 console.log(processedData, processedData2);
//             },1000);
//         })
//     })
// }
// doAll();

//Promise
// status: {
//     Pending,
//     Fulfilled,
//     Rejected
// }
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            //did somenthing
            resolve('Firts data');
        }, 1500);
})

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {        
        setTimeout(function() {
            //did somenthing
            resolve('Second data');
        }, 1000);
})

// console.log("\n");
// doSomethingPromise()
//     .then(data => {
//         console.log(data.split(''));
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2.split('')))
//     .catch(error => console.log('error: ',error));

//Execute paralel
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

//Execute the first function ready
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})