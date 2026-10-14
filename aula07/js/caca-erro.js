// Trecho A
if (media = 7) {
  saida.textContent = "Média exatamente 7"
}
// só tem um =, logo nunca vai ser igual
//correção
 //if (media === 7) {
 //  saida.textContent = "Média exatamente 7"
 //}
// Trecho B (o usuário digitou 9 e 10)
const a = document.querySelector("#a").value
const b = document.querySelector("#b").value
if (a > b) {
  saida.textContent = "O maior é " + a
}
// o resultado está errado e não tem o else
//correção
 //const a = document.querySelector("#a").value
 //const b = document.querySelector("#b").value
 //if (a > b) {
 //  saida.textContent = "O maior é " + a
 //}else{
 //  saida.textContent = "O maior é " + b
 //}
// Trecho C
if (imc < 30) {
  faixa = "Sobrepeso"
} else if (imc < 25) {
  faixa = "Peso normal"
}
// dele colocar o menor valor primeiro
// porque o primeiro verdadeiro faz o resto ser falso
//correção
 //if (imc < 25) {
 //  faixa = "Peso normal"
 //} else if (imc < 30) {
 //  faixa = "Sobrepeso"
 //}