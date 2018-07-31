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

	let pesoEhValido = true;
	let alturaEhvalida = true;


	let messageError = document.querySelector(".alert-danger");
	messageError.style.display = "none";

	// AVALIA O PESO
	if (peso <= 0 || peso >= 1000) {
		// messageError.style.display = "block";
		// tdImc.style.color = "red"

		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido")

		messageError.textContent = `${nome}, não tem um peso válido.`
	}

	// AVALIA A ALTURA
	if (altura <= 0 || altura >= 1000) {
		// messageError.style.display = "block";

		pesoEhValido = false;
		tdAltura.textContent = "Altura inválida"
		paciente.classList.add("paciente-invalido")

		messageError.textContent = `${nome}, não tem uma altura válida.`
	}

	if (pesoEhValido && alturaEhvalida) {
		let imc = calculaImc(peso, altura)
		tdImc.textContent = imc;
	}
});


function calculaImc (peso, altura) {
	let imc = 0;

	imc = peso / (altura * altura);
	return imc.toFixed(2);
}
