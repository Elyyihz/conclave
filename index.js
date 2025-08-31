const input = require("prompt-sync")();

let cardeais = [];
const votosNecessarios = Math.ceil((2 / 3) * 5);

// ---Cadastramento dos Cardeais

console.log("--- Conclave: Eleição do Papa ---");
console.log("     Cadastro de 5 cardeais\n");

for (let i = 1; i <= 5; i++) {
  let nome = input("Insira o nome do " + i + "º Cardeal: ");
  cardeais.push({ id: i, nome, votos: 0 });
}

// --- Votação
console.log("\n--- Lista de Cardeais ---");
cardeais.forEach((cardeais) => {
  console.log(cardeais.id + " - " + cardeais.nome);
});

for (let i = 1; i <= 5; i++) {
  let voto = parseInt(input("Voto " + i + " - Escolha o número do cardeal: "));

  let escolhido = cardeais.find((cardeais) => cardeais.id === voto);

  if (!escolhido) {
    console.log("Número inválido! Vote novamente.");
    i--;
  } 
  else {
    escolhido.votos++;
  }

}

// --- Resultado
console.log("\n--- Resultado da votação --- \n");
cardeais.forEach((cardeais) => {
  console.log(cardeais.nome + " - " + cardeais.votos);
});

let eleito = cardeais.find((cardeais) => cardeais.votos >= votosNecessarios);

if (eleito) {
  console.log("\nO novo Papa é " + eleito.nome + " com " + eleito.votos + " votos!");
} else {
  console.log(
    "Nenhum cardeal atingiu 2/3 dos votos. Nova votação será necessária."
  );
}
