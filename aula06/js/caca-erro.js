const botao = document.querySelector("#calcula")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  //as const n1,n2,n3 não estão com Number, logo eles não somam
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  const n3 = Number(document.querySelector("#nota3").value)
  // não tem () no n1 a n3, logo a media vai dar errado
  const media = (n1 + n2 + n3) / 3
  saida.textContent = "Média: " + media
}