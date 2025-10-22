// 🏆 Calculadora de Partidas Rankeadas
// ------------------------------------
// Desafio: Calcular o saldo de vitórias e determinar o nível do jogador

// Função principal que recebe o número de vitórias e derrotas
function calcularRank(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Estrutura de decisão para determinar o nível
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Não classificado";
  }

  // Retorna uma mensagem formatada
  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
}

// Exemplo de uso da função:
let resultado = calcularRank(75, 32);
console.log(resultado);

// Você pode testar com outros valores:
console.log(calcularRank(9, 1));    // Deve retornar Ferro
console.log(calcularRank(25, 4));   // Deve retornar Prata
console.log(calcularRank(102, 2));  // Deve retornar Imortal
