const botao = document.querySelector("#analizar")
const saida = document.querySelector("#resultado")
const numero_secreto=Math.floor(Math.random() * 100) + 1
    let tentativas=0
    let chance=7
    let acumulador=""
    botao.onclick =()=>{ 
    const numero = Number(document.querySelector("#numero").value)
    tentativas++
    chance--
    acumulador+=numero+" "  
    if( numero === numero_secreto){ 
    saida.textContent="O número secreto é "+numero_secreto+" Acertou em "+tentativas+" Tentativas"+" Chutes: "+acumulador
    saida.className = "ok"      
    }
    else if(numero<numero_secreto){
        saida.textContent="É Maior"
        saida.className = "alerta"
    }else if(numero>numero_secreto){
        saida.textContent="É Menor"
        saida.className = "alerta"
    }
    if(chance===0){
        saida.textContent="Suas chances acabaram. O numero secreto é "+ numero_secreto+" Chutes: "+acumulador
    }
    
}