const leia = require("readline-sync");

console.log(
  "Produtos disponiveis: Cachorro Quente|X-Salada|X-Bacon|Bauru|Refrigerante|Suco de laranja "
);
let opção = leia.questionInt("Escolha um produto: ");
let qtd = leia.questionInt("Digite a quantidade: ");
switch (opção) {
  case 1:
    console.log("Produto: Cachorro Quente");
    console.log("Valor total: R$ " + qtd * 10.0);
    break;
  case 2:
    console.log("Produto: X-Salada");
    console.log("Valor total: R$ " + qtd * 15.0);
    break;
  case 3:
    console.log("Produto: X-Bacon");
    console.log("Valor total: R$ " + qtd * 18.0);
    break;
  case 4:
    console.log("Produto: Bauru");
    console.log("Valor total: R$ " + qtd * 12.0);
    break;
  case 5:
    console.log("Produto: Refrigerante");
    console.log("Valor total: R$ " + qtd * 8.0);
    break;
  case 6:
    console.log("Produto: Suco de laranja");
    console.log("Valor total: R$ " + qtd * 13.0);
    break;

  default:
    console.log("error");
    break;
}
