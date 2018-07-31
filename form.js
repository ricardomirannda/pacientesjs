let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", event => {
	event.preventDefault();

	let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  let pacienteTr = montaTr(paciente);

	// Adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr)

  form.reset();

});

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
