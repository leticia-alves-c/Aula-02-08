let primeroNome = "Leticia"
let ultimoNome ="Coelho"

let nomeCompleto = primeroNome + " " + ultimoNome
console.log(nomeCompleto)

let numero1 = 10
let numero2 = 20

let soma = numero1 = numero2
let subtração = numero1 - numero2
let multiplicação = numero1 * numero2
let divisão = numero1 / numero2
console.log(soma, subtração, multiplicação, divisão )

let estáChovendo = true 
if(estáChovendo){
    console.log("Está chovendo")
}else{
    console.log("Não está chovendo")
}

let resposta = null
let nota
console.log(resposta, nota)

let idUnico = Symbol()

let produto ={
    [idUnico]: 123,
    nome: "Camisa"
}

console.log(produto[idUnico])

let numeroGrande = BigInt("12345678910121314151617181920")
console.log(numeroGrande)