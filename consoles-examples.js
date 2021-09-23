//Consoles examples.

console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My Group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My Group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
}, 2000);

console.table(['Rafael Bertolim Pavanello', "Digital Innovation One"]);

console.log('%c styled log', 'color: blue; font-size: 40px');