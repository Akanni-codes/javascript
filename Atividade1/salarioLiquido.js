const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Insira valor do salario bruto: ");

let adicionalNoit = leia.questionFloat("Insira valor do adicional noturno: ");

let horasExt = leia.questionFloat("Insira valor das horas extras: ");

let descontos = leia.questionFloat("Insira valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoit + horasExt * 5 - descontos;

console.log("Salario Liquido: " + salarioLiquido.toFixed(2));
