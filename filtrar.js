let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  let pacientesTodos = document.querySelectorAll(".paciente");

  if ( this.value.length > 0 ){
    pacientesTodos.forEach( paciente => {

      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;

      let expressao = new RegExp( this.value, "insenstive");
      



      // this.value é o campo filtro que está no HTML
      if ( nome == this.value ){
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }
    })

  } else {
    pacientesTodos.forEach( paciente => {
      paciente.classList.remove("invisivel");
    })
  }


});
