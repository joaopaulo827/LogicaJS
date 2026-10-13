const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#nota1").value)


    if (n1%2===0) {
    saida.textContent = "Par "
    saida.className = "ok"
    } else {
    saida.textContent = "Impar "
    saida.className = "alerta"
    }
}