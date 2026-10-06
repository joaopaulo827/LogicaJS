const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")

botao.onclick =()=>{
    const c = Number(document.querySelector("#celcius").value)

    const fahrenheit =c*9/5+32

    saida.textContent="°F"+ fahrenheit.toFixed(2)
}