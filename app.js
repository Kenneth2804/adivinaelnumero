var numeroSecreto = Math.floor(Math.random() * 100) + 1;

var intentos = 0;

function adivinarNumero() {
	var numero = parseInt(document.getElementById('numero').value);

	if (isNaN(numero) || numero < 1 || numero > 100) {
		alert("POR FAVOR, INGRESA UN NÚMERO VALIDO ENTRE 1 Y 100");
		return;
	}

	intentos++;

	if (numero === numeroSecreto) {
		alert(`Ahuevo sí era eres un crack porque lo hiciste en ${intentos} intentos`);
	}else if( numero < numeroSecreto){
		alert("casi paps, el numero es mayor, trata otra vez");
	}else{
		alert('Uy!, El número es menor, trata otra vez')
	}
}

function reiniciarJuego() {
	numeroSecreto = Math.floor(Math.random()* 100) + 1;

	intentos = 0;

	document.getElementById('numero').value = "";
}

var botonAdivinar = document.getElementById('boton-adivinar');
botonAdivinar.addEventListener('click', adivinarNumero);

var botonReiniciar = document.getElementById('boton-reiniciar');
botonReiniciar.addEventListener('click', reiniciarJuego)