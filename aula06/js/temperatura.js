const converter = document.querySelector("#converter")
const resultado = document.querySelector("#resultado")

converter.onclick =()=>{
    const c = Number(document.querySelector("#celcius").value)

    const fahrenheit =c*9/5+32

    resultado.textContent="°F"+ fahrenheit.toFixed(1)
}