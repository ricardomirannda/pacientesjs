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
		let imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);

		console.log("Sucesso meu garoto")
	}
});

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", event => {
	event.preventDefault();

	let form = document.querySelector("#form-adiciona");

	// Dados do formulario
	let nome 		= 	form.nome.value;
	let peso 		= 	form.peso.value;
	let altura 	= 	form.altura.value;
	let gordura = 	form.gordura.value;
	let imc 		= 	form.imc.value;

	// Criando a TR do pacientes
	let pacienteTr = document.createElement("tr");


	// Criacao das colunas
	let nomeTd 		= 	document.createElement("td");
	let pesoTd 		= 	document.createElement("td");
	let alturaTd 	= 	document.createElement("td");
	let gorduraTd = 	document.createElement("td");
	let imcTd 		= 	document.createElement("td");

	// As colunas recebem os dados do formulário
	nomeTd.textContent 		= 	nome;
	pesoTd.textContent 		= 	peso;
	alturaTd.textContent 	= 	altura;
	gorduraTd.textContent = 	gordura;
	imcTd.textContent 		= 	imc;

	// Coloco as colunas como filhas da TR pacienteTr
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(imcTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	// Seleciona o TBODY para inserir as TR's
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr)

console.log(tabela)

	// let pessoa = [
	// 	{
	// 		nome:  nome,
	// 		peso:  peso,
	// 		altura:  altura,
	// 		gordura:  gordura,
	// 		imc: imc,
	// 	}
	// ];

	// let pessoa = [nome, peso, altura, gordura, imc];


});
