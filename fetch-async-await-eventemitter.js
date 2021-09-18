//fetch has the same function than Xmlhttprequest

//Using fetch
const callFetch = () => {
    return fetch('/data.json')
    .then(responseStream => {
        console.log(responseStream);
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            throw new Error('Request error');
        }        
    })
    .then( data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: '+err);
    });
}

const callFetchExternal = () => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            throw new Error('Request error');
        }        
    })
    .then( data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: '+err);
    });
} 

//Stopped at 09:50