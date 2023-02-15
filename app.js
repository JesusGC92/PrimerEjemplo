function iniciar() {
  formulario.addEventListener("submit", enviar, false);
}

function enviar() {
  var elemento = document.getElementById("nombre");
  var valido = document.informacion.checkValidity();
  if (valido) {
    document.informacion.submit();
  } else if (elemento.validity.patternMismatch ||
    elemento.validity.valueMissing) {
    alert('el nombre de usuario debe tener mínimo de 3 caracteres');
  }
}



