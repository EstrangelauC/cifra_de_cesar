
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z"]

const seletor = document.getElementById("deslocamento")
const texto = document.getElementById("para-criptografar")
const botao = document.getElementById("botao")
const resposta = document.getElementById("resposta")

// Preenchendo o seletor com as opções de deslocamento
for (let i = 0; i < alfabeto.length; i++) {
    seletor.innerHTML += `<option value="${i}">${alfabeto[i]}</option>`
}

// Evento de clique para o botão de criptografar
botao.addEventListener("click", () => {
    let textoParaCriptografar = texto.value
    let deslocamento = +seletor.value

    let cifrado = cifrar(textoParaCriptografar, deslocamento)
    resposta.classList.remove("invisivel")
    resposta.innerText = cifrado
})

function cifrar(texto, deslocamento) {
    let textoMaiusculo = texto.toUpperCase().split("")
    let textoCriptografado = []

    for (let i = 0; i < textoMaiusculo.length; i++) {
        let indiceDaLetra = alfabeto.indexOf(textoMaiusculo[i])
        if (indiceDaLetra >= 0) {
            textoCriptografado.push(letraPorIndice(indiceDaLetra + deslocamento))
        } else {
            textoCriptografado.push(textoMaiusculo[i])
        }
    }

    return textoCriptografado.join("")
}

function letraPorIndice(indice) {
    let indiceFinal = indice % alfabeto.length
    if (indiceFinal < 0) {
        indiceFinal += alfabeto.length
    }
    return alfabeto[indiceFinal]
}
