const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#minutos").value)

    const horas =(Math.floor(minutos/60))
    saida.textContent= "minutos="+horas.toFixed(1)+"h"
}