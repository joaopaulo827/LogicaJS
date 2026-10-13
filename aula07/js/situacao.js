const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#nota").value)


    if (n1 >= 7) {
    saida.textContent ="Aprovado"
    saida.className = "ok"
    } else if(n1>=6){
    saida.textContent ="Recuperação"
    saida.className = "alerta"
    }else if (n1<5){
    saida.textContent ="Reprovado"
    saida.className = "erro"        
    }
}