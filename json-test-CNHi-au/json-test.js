const obj = {
    "i-d": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "e-mail": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "ci-ty": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "web-site": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catch-Phrase": "Multi-layered client-server neural-net",
        "b-s": "harness real-time e-markets"
    }
};

//Function to rename the properties names, eg: replace all the names from - to _.
function renameProperties(obj) {
    Object.getOwnPropertyNames(obj).forEach(function (objKey) {
        key = objKey.replace(/-/g, "_");
        arr = objKey.split("");

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "-") {
                obj[key] = obj[objKey];
                delete obj[objKey];
                break;
            }
        }
    });   

    Object.keys(obj).map(function (e) {
        return obj[e]
    }).forEach(function (childObj) {
    
        if (typeof childObj == "object") {
            renameProperties(childObj);
        };
    })

    //New mode
    // Object.values(obj).forEach(function (childObj) {
    //     if (typeof childObj == "object") {
    //         renameProperties(childObj);
    //     };
    // })

    return obj;
}

newObj = renameProperties(obj);
console.log(newObj);