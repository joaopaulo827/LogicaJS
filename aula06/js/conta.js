const converter = document.querySelector("#converter")
const resultado = document.querySelector("#resultado")

converter.onclick =()=>{
    const n1 = Number(document.querySelector("#conta").value)
    const n2 = Number(document.querySelector("#pessoa").value)

    const taxa_servico=n1*10
    const total = n1+taxa_servico
    const Spessoa=total/n2
    resultado.textContent="Servico:"+ taxa_servico.toFixed(0)+"\n"+"Valor total:R$"+ total.toFixed(1)+"\n"+"Por pessoa: R$"+ Spessoa.toFixed(1)
}