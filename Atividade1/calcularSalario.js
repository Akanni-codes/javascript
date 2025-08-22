const leia = require('readline-sync');

let salario = leia.questionFloat('Digite o salario do funcionario: ' );
let abono = leia.questionFloat('Digite o valor do abono: ');
let novoSalario = salario + abono;

console.log(`salario atual:` + novoSalario.toFixed(2))
