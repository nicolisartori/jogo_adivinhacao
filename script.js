var min = 1;
var max = 100;
var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroAleatorio);

var btn = document.getElementById('btn') /* pega a id do botao */
var contador = 0

btn.addEventListener('click', function() {  /* incrementa contador toda vez que botao for clicado */
    contador++
})

function testar() {
    let number = document.getElementById('num')
    let numeroDigitado = Number(number.value)

    var lampada = document.getElementById('lampada'); /* pega a id da lampada */

    if (contador==5){
        alert(`Suas tentativas acabaram! Tente adivinhar o próximo número...`)
        window.location.reload(true);
    } else if (numeroDigitado < 1 || numeroDigitado > 100) {
        alert(`Digite um número entre 1 e 100`)
    } else if (numeroDigitado == numeroAleatorio) {
        lampada.setAttribute('src', 'acesa.png'); /* troca lampada de apagada para acesa */
        alert(`Você acertou!`)
    } else if (numeroDigitado < numeroAleatorio) { 
        alert(`Digite um número maior`)
    } else {
        alert(`Digite um número menor`)
    }
}