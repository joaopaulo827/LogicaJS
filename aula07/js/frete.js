const botao = document.querySelector("#calcular")
const regiao = document.querySelector("#regiao").value
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
const compra = Number(document.querySelector("#compra").value)
let frete
if(regiao==="vazio"){
    saida.textContent="Erro"
}
switch (regiao) {
  case "sul":
    frete = 15
    break
  case "sudeste":
    frete = 20
    break
  case "centro-oeste":
    frete = 25
    break
  case "nordeste":
    frete = 30
    break
  case "norte":
    frete = 35
    break            
  default:
    frete = 35
}
const total=compra+frete
if(compra >= 200 && (regiao === "sul" || regiao === "sudeste")){
    saida.textContent="Para o "+ regiao+" dá frete gratis e"+" R$"+total.toFixed(2)
}else{
    saida.textContent="Para o "+ regiao+" a frete total é "+frete+" e o total de R$"+total.toFixed(2)
}
}
