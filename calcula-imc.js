let titulo = document.querySelector(".titulo");
titulo.textContent = "Maria Nutrição S.A"


let pacientes = document.querySelectorAll(".paciente");

// PEGA O PACIENTE
pacientes.forEach( paciente => {

	let tdNome = paciente.querySelector(".info-nome");
	let nome = tdNome.textContent;

	let tdPeso = paciente.querySelector(".info-peso");
	let peso = tdPeso.textContent;

	let tdAltura = paciente.querySelector(".info-altura");
	let altura = tdAltura.textContent;

	let tdImc = paciente.querySelector(".info-imc");

	let pesoEhValido = validaPeso(peso);
	let alturaEhvalida = validaAltura(altura);


	let messageError = document.querySelector(".alert-danger");
	messageError.style.display = "none";

	// AVALIA O PESO
	if (!pesoEhValido) {

		tdPeso.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido")

		messageError.textContent = `${nome}, não tem um peso válido.`
	}

	// AVALIA A ALTURA
	if (!alturaEhvalida) {

		tdAltura.textContent = "Altura inválida"
		paciente.classList.add("paciente-invalido")

		messageError.textContent = `${nome}, não tem uma altura válida.`
	}

	if (pesoEhValido && alturaEhvalida) {
		let imc = calculaImc(peso, altura)
		tdImc.textContent = imc;
	}
});


function validaPeso (peso) {
	if(peso >= 0 && peso < 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura (altura){
	if (altura >= 0 && altura <= 3.0) {
			return true;
		} else {
			return false;
	}
}


function calculaImc (peso, altura) {
	let imc = 0;

	imc = peso / (altura * altura);
	return imc.toFixed(2);
}
