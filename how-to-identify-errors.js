//Deal one
try {
    console.log(name);
    const name = "Rafael Bertolim Pavanello";
} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log("Keep going");
}


//Deal two
try {
    const name = "Rafael Bertolim Pavanello";

    const myError = new Error('Custom message');

    throw myError;
} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log("Keep going");
}


//Deal three
class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const name = "Rafael Bertolim Pavanello";

    const myError = new CustomError( {
        message: "Custom message",
        data : {
            type: "Server error"
        }
    });

    throw myError;
} catch (err) {
    if (err.data.type === 'Server error') {
        //....
    } else {
        //...
    }
    console.log(err);
    console.log(err.data);
} finally {
    console.log("Keep going");
}