//Symbols
const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hy',

}
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

//well known symbols
Symbol.intetator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//old mode
const arr2 = [1,2,3,4];
const it2 = arr2[Symbol.iterator]();
while (true) {
    let { value, done } = it2.next();   

    if(done) {
        break;
    }

    console.log("value from while: "+value);
}

//new one
const arr3 = [1,2,3,4];
for (let value of arr3) {
    console.log("value from for/of: "+value);
}

const str = "Digital Innovation One";
for (let value of str) {
    console.log(value);
}

//Putting a iterator in a object
const objIt = {
    values:[1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it3 = objIt[Symbol.iterator]();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
