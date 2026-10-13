//aparece "NaN Obesidade"//
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const peso = Number(document.querySelector("#campoPeso").value)
    const altura = Number(document.querySelector("#campoAltura").value)

    if (campoPeso.value === "" || campoAltura.value === "") {
        saida.textContent ="Preencha o peso e a altura."
    } else if (peso <= 0 || altura <= 0) {
        saida.textContent ="Campo preenchido com 0 ou número negativo"
    } else {
    const imc=peso/(altura*altura)

    if (imc < 18.5) {
    saida.textContent =imc.toFixed(1)+" Abaixo do peso"
    saida.className = "alerta"
    } else if(imc < 25){
    saida.textContent =imc.toFixed(1)+" Peso normal"
    saida.className = "ok"
    } else if(imc <30){
    saida.textContent =imc.toFixed(1)+" Sobrepeso"
    saida.className = "alerta"
    }else{
    saida.textContent =imc.toFixed(1)+" Obesidade"
    saida.className = "erro"        
    }        
    }    
}