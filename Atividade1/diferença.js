const leia = require('readline-sync');

let n1 = leia.questionFloat('Insira um valor: ');

let n2 = leia.questionFloat('Insira um valor: ');

let n3 = leia.questionFloat('Insira um valor: ');

let n4 = leia.questionFloat('Insira um valor: ');

let dif = (n1 * n2) - (n3 * n4);

console.log('Diferença: ' + dif);