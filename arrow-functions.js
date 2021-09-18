var sumOld = function (a, b) {
    return a + b;
}
console.log(sumOld(10, 10));

//Arrow functions (anonymous functions ??)
var sum = (a, b) => a + b;

var sum = (a, b) => {
    return a + b
}
console.log(sum(10, 10));

//Arrow functions with one argument
var sum = a => a + 5;

//Return object with arrow functions
var createObj = () => ({teste: 123, defaultName: "John john"});
console.log(createObj());


//How arrow functions is useful
//old one mode
var obj = {
    showContextVar: function showContext() {
        console.log('test');

        //It does not work
        // setTimeout(function() {
        //     this.log('after 1000ms');
        // }, 1000);

        //To work
        setTimeout(
            function() {
                this.logVar('after 1000ms')
        }.bind(this), 
        1000
        );
    },
    logVar: function log(value) {
        console.log(value);
    }
}
obj.showContextVar();


//With arrow function (It uses the same context)
var objArrow = {
    showContextAttribute: function showContext() {
        //this = obj

        setTimeout(() => {
            this.log('after 1000ms (objArrow)')
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
}
objArrow.showContextAttribute();