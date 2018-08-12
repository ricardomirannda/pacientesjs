let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", event => {
	event.preventDefault();

	let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  let pacienteTr = montaTr(paciente);

	let erros = validaPaciente(paciente)


	if (erros.length > 0) {
		exibeMensagensDeErro(erros);

		return;
	}

	// Adicionando o paciente na tabela
	let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr)

  form.reset();

	let mensagensErro = document.querySelector("#mensagens-erro");

});

function exibeMensagensDeErro(erros){
	let ul = document.querySelector(".mensagens-erro");

	ul.innerHTML = "";

	erros.forEach( erro => {
		let li = document.createElement("li");
		li.textContent = erro;

		ul.appendChild(li);

	});
}


// Extraindo informacoes do paciente no formulario
function obtemPacienteDoFormulario(form) {
  let paciente = {
    nome 		: 	form.nome.value,
    peso 		: 	form.peso.value,
    altura 	: 	form.altura.value,
    gordura : 	form.gordura.value,
    imc 		: 	calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

// Criando a TR do paciente
function montaTr (paciente){
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // Coloco as colunas como filhas da TR pacienteTr
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild( montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

// Monta td
function montaTd (dado, classe) {

  let td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;

  // // Criacao as TD's que sao as colunas do paciente
  let nomeTd 		= 	document.createElement("td");
  let pesoTd 		= 	document.createElement("td");
  let alturaTd 	= 	document.createElement("td");
  let gorduraTd = 	document.createElement("td");
  let imcTd 		= 	document.createElement("td");

  // As colunas recebem os dados do formulário
  nomeTd.textContent 		= 	paciente.nome;
  pesoTd.textContent 		= 	paciente.peso;
  alturaTd.textContent 	= 	paciente.altura;
  gorduraTd.textContent = 	paciente.gordura;
  imcTd.textContent 		= 	paciente.imc;

}

// Valida paciente
function validaPaciente(paciente) {
	let erros = [];

	if (paciente.nome.length == 0)
		erros.push("O nome do paciente não pode ser vazio")

	if (paciente.gordura.length == 0)
		erros.push("O peso do paciente não pode ser vazio")

	if (paciente.altura.length == 0)
		erros.push("A altura do paciente não pode ser vazio")

	if (!validaPeso (paciente.peso))
		erros.push("Peso inválido");

	if (!validaAltura (paciente.altura))
		erros.push(" Altura inválida");

	return erros;
}
