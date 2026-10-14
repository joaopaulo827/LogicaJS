const botao = document.querySelector("#analizar")
const saida = document.querySelector("#resultado")
const numero_secreto=Math.floor(Math.random() * 100) + 1
    let tentativas=1
    botao.onclick =()=>{ 
    const numero = Number(document.querySelector("#numero").value)
    tentativas++        
    if( numero === numero_secreto){ 
    saida.textContent="O número secreto é "+numero_secreto+" Acertou em "+tentativas+" Tentativas"
    saida.className = "ok"      
    }else if(numero<numero_secreto){
        saida.textContent="É Maior"
        saida.className = "alerta"
    }else if(numero>numero_secreto){
        saida.textContent="É Menor"
        saida.className = "alerta"
    }
}