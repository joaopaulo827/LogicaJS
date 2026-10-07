const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#total").value)

    const horas =(Math.floor(n1/60))
    const minutos= (n1%60)
    saida.textContent=n1+" minutos"+"= "+horas.toFixed(1)+"h"+"\n"+"e "+minutos.toFixed(1)+" minutos"
}