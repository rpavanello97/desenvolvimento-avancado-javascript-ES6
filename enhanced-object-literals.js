//Old mode
var prop = "Digital Innovation One";

var obj = {
    prop1: prop
}
console.log(obj);

//New mode
var fullName = "Rafael Bertoli Pavanello";

var person = {
    fullName
}
console.log(person);



function method1() {
    console.log('method called');
}

var obj2 = {
    method1
}
obj2.method1();



var obj3 = {
    sum: function sum (a, b) {
        return a + b;
    },
    //or 
    sum2 (a, b) {
        return a + b;
    }
}
console.log(obj3.sum(3,4));
console.log(obj3.sum2(3,4));



var propName = 'test';
var obj4 = {
    [propName + 'concat']: 'prop value'
}
console.log(obj4);