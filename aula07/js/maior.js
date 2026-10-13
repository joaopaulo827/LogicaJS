const botao = document.querySelector("#avaliar")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const n1 = Number(document.querySelector("#nota1").value)
    const n2 = Number(document.querySelector("#nota2").value)

    if (n1>n2) {
    saida.textContent =n1+" é maior que "+n2
    saida.className = "ok"
    } else if(n1<n2){
    saida.textContent =n2+" é maior que "+n1
    saida.className = "ok"
    } else{
    saida.textContent ="Os dois números são iguais"
    saida.className = "alerta"        
    }
}