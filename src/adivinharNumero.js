// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.

function adivinharNumero(max, palpite) {
  numeroAleatorio = (Math.ceil(Math.random() * 10))
  let palpite = Number(prompt("Digite o seu palpite."))
  if (palpite == numeroAleatorio) {
    alert("Acertou!")
  }
  else {
    alert("Errou!")
  }

}


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };