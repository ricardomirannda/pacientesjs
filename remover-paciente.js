var pacientesSelecionados = document.querySelectorAll(".paciente");

// pacientesSelecionados.forEach( paciente => {
//   paciente.addEventListener("dblclick", function() {
//     console.log("Duplo");
//
//     this.remove();
//   });
// });

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(() =>{
    event.target.parentNode.remove();
  }, 500);

});
