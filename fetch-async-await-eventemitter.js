//fetch has the same function than Xmlhttprequest

//Using fetch
// const callFetch = () => {
//     return fetch('/data.json')
//     .then(responseStream => {
//         console.log(responseStream);
//         if (responseStream.status === 200) {
//             return responseStream.json()
//         } else {
//             throw new Error('Request error');
//         }        
//     })
//     .then( data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Erro: '+err);
//     });
// }

// const callFetchExternal = () => {
//     return fetch(`http://jsonplaceholder.typicode.com/posts`)
//     .then(responseStream => {
//         if (responseStream.status === 200) {
//             return responseStream.json()
//         } else {
//             throw new Error('Request error');
//         }        
//     })
//     .then( data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Erro: '+err);
//     });
// }

//ES7 Async/ Await
//Works as a promisse

const asyncTimer = () =>
     new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(123456);
         }, 2000);
     });

const simpleFunc = async () => {
    //throw new Error("A error ocorred");
    const data = await asyncTimer();
    console.log(data);

    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
    return dataJSON;
};

const callSimpleFunc = () => {
    simpleFunc()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err)
        })
}

