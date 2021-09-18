//Old Mode
function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}
console.log(multiply(5))

//New mode
function multiplyNew(a, b = 2) {
    return a * b;
}
console.log(multiplyNew(4));

//Lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiplyNewTwo(a, b = randomNumber()) {
    return a * b;
}
console.log(multiplyNewTwo(3));
