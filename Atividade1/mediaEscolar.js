const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite a primeira nota: ");
let n2 = leia.questionFloat("Digite a segunda nota: ");
let n3 = leia.questionFloat("Digite a terceira nota: ");
let n4 = leia.questionFloat("Digite a quarta nota: ");

let media = (n1 + n2 + n3 + n4) / 4;
console.log(`A media do aluno e: ` + media);
if (media >= 7) {
  console.log("Aprovado");
} else if (media < 7 && media >= 4) {
  console.log("Recuperacao");
} else {
  console.log("Reprovado");
}
