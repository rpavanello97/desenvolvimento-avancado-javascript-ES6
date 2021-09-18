//Old version
var arr = ['Apple','Banana','Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment
var [appleVariable, bananaVariable, orangeVariable, [tomatoVariable]] = ['Apple','Banana','Orange', ['Tomato']];

console.log("Value of apple: "+apple+"\nValue of appleVariable: "+appleVariable);
console.log(['Tomato']);


//Destructuring with object
var obj = {
    name: "Celso",
    props: {
        age: 26,
        gender: "Male",
        favoriteColors: ['black','blue']
    },    
};

var { name } = obj;
var { name : nameVariable } = obj;
var {
    props : { age }
} = obj;
var {
    props : { age: ageVariable, favoriteColors: [color1,color2] }
} = obj;

console.log(name);
console.log(nameVariable);
console.log(age);
console.log(ageVariable);
console.log(color1+" "+color2);

var arr2 = [{name: "Apple", type:"fruit"}]

var [{ name, type }] = arr2;
console.log(name, type);


//destructuring with function
//old one mode
function sum(arr) {
    return arr[0] + arr[1];
}
console.log(sum([5,5]));

//new one mode
function sumNew([a,b]) {
    return a + b;
}
console.log(sumNew([5,5]));

function sumNew2([a, b] = [5, 5]) {
    return a + b; 
}
console.log(sumNew2());