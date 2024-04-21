const formulario = document.getElementById('contactform');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');
  const mensajeInput = document.getElementById('message');

 
  validarCampo(nombreInput, nombreInput.value.trim());


  validarCampo(apellidoInput, apellidoInput.value.trim());


  validarCampo(emailInput, emailInput.value.trim());


  validarCampo(telefonoInput, telefonoInput.value.trim());

 
  validarCampo(mensajeInput, mensajeInput.value.trim());

  if (
    nombreInput.style.borderColor === 'green' &&
    apellidoInput.style.borderColor === 'green' &&
    emailInput.style.borderColor === 'green' &&
    telefonoInput.style.borderColor === 'green' &&
    mensajeInput.style.borderColor === 'green'
  ) {
    alert('¡Muchas Gracias, en la brevedad nos pondremos en contacto contigo! Saludos de CLAPAMUEBLES.');
    formulario.submit();
    formulario.reset(); 
  }
});

function validarCampo(inputElement, valor) {
  const valorTrim = valor.trim(); 
  if (valorTrim === '') {
    alert(`El campo ${inputElement.id} es obligatorio.`);
    inputElement.style.borderColor = 'red';
  } else {

    switch (inputElement.id) {
      case 'nombre':
        break;
      case 'apellido':

        break;
      case 'email':

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valorTrim)) {
          alert('El formato del correo electrónico no es válido.');
          inputElement.style.borderColor = 'red';
          return;
        }
        break;
      case 'telefono':
        break;
      case 'mensaje':
        break;
      default:
    
        break;
    }

    inputElement.style.borderColor = 'green';
  }
}

const alertButton = document.querySelector('.alert-btn'); 
alertButton.addEventListener('click', function() {
  formulario.reset(); 
});

