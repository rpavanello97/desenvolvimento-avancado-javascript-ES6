var fs = require('fs');
console.log("First command");

fs.readFile('./arquivo.txt', callback);

function callback(err, conteudo) {
    if (err) return console.log(err);
    console.log(String(conteudo));
}

console.log("Second command");
console.log("Third command");