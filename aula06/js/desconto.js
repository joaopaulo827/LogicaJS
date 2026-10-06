const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#preço").value)
    const n2 = Number(document.querySelector("#desconto").value)

    const desconto =n1*(n2/100)
    const precofinal =n1-desconto
    saida.textContent= "Desconto:R$" +desconto.toFixed(2)+ "\n"+ "Preco Final:R$" +precofinal.toFixed(2)
}