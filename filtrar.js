let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  let pacientesTodos = document.querySelectorAll(".paciente");

  // this.value é o campo filtro que está no HTML
  if ( this.value.length > 0 ){
    pacientesTodos.forEach( paciente => {

      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;

      let expressao = new RegExp( this.value, "i");

      if ( !expressao.test(nome) ){
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
        paciente.classList.add("selecionado")
      }
    })

  } else {
    pacientesTodos.forEach( paciente => {
      paciente.classList.remove("invisivel");
      paciente.classList.remove("selecionado")
    })
  }


});
