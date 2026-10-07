const converter = document.querySelector("#converter")
const resultado = document.querySelector("#resultado")

converter.onclick =()=>{
    const n1 = Number(document.querySelector("#distancia").value)
    const n2 = Number(document.querySelector("#consumo").value)
    const n3 = Number(document.querySelector("#custo").value)

    const total = n1/n2
    const ida=total*n3
    const volta=ida*2
    resultado.textContent="Gasto total de litros:"+ total.toFixed(1)+" litros"+"\n"+"Total para ir R$:"+ ida.toFixed(2)+"\n"+"Total para volta R$:"+ volta.toFixed(2)
}