const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#nota").value)


    if (n1%4===0 && n1%100!==0 ||n1%400===0 ) {
    saida.textContent = "é Bissexto"
    saida.className = "ok"
    } else {
    saida.textContent = "Não é Bissexto "
    saida.className = "alerta"
    }
} 