//old mode (rest operator)
function sum(a, b) {
    console.log(arguments);
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(5, 5, 5, 2, 3));



//new modes (rest operator)
function sumRest(...args) {
    //...args is a array with all array functions available
    return "Total sumRest: " + args.reduce((acc, value) => acc + value, 0);
   
}
console.log(sumRest(5, 5, 5, 2, 3));


const sumRestArrow = (...args) => {
    return "Total sumRestArrow: " + args.reduce((acc, value) => acc + value, 0);
};
console.log(sumRestArrow(5, 5, 5, 2, 3));

const sumRestArrow2 = (a, b, ...args) => {
    console.log("Arguments arrow: "+a, b, args);
};
sumRestArrow2(5, 5, 5, 2, 3);


//old mode (Spread operator)
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const orderMultiply = (...rest) => {
    return multiply.apply(undefined, rest);
}
console.log(orderMultiply(5, 5, 5, 2, 3));

//new mode (spread operator)
const multiplySpread = (...args) => args.reduce((acc, value) => acc * value, 1);
const orderMultiplySpread = (...rest) => {
    return multiplySpread(...rest); // <--
}
console.log(orderMultiply(5, 5, 5, 2, 3));


//spread operator with string
const str = "Digital Innovation One";

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

//spread with arrays
const arr = [1,2,3,4];

function logArgs2(...args) {
    console.log(args);
}
logArgs2(...arr);

const arr2 = [...arr,5,6,7];
console.log(arr2);


//spread with literal objects
const obj = {
    test: 123,
    test2: 423,
}
const obj2 = {
    ...obj,
    test3: "hello"
}
console.log(obj2);


//spread with shallow clone
const obj3 = {
    test: 123,
    subObj : {
        test: 123
    }
};
const obj4 = {...obj3, subObj: {...obj3.subObj}};
obj4.subObj.test = 456;
console.log(obj3);
console.log(obj4);