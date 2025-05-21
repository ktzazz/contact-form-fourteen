document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('.main-container');
  // Asegúrate de que todos tus inputs y elementos relacionados estén seleccionados aquí dentro:
  const nameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const queryTypeRadios = document.querySelectorAll('input[name="queryType"]');
  const consentCheckbox = document.querySelector('.consent input[type="checkbox"]');

  // Lógica para los radio buttons (código que ya tienes)
  const radioOptions = document.querySelectorAll('.radio-option');
  radioOptions.forEach(option => {
    option.addEventListener('click', function() {
      const radioInput = this.querySelector('.radio-input');
      if (radioInput) {
        radioInput.checked = true;
        radioInput.dispatchEvent(new Event('change'));
      }
    });
  });

  const radioInputs = document.querySelectorAll('.radio-input');
  radioInputs.forEach(input => {
    input.addEventListener('change', function() {
      radioInputs.forEach(otherInput => {
        otherInput.closest('.radio-option').classList.remove('selected');
      });
      if (this.checked) {
        this.closest('.radio-option').classList.add('selected');
      }
    });
  });

  // Listener principal del formulario
  if (formulario) { // Aunque ya sabemos que se encuentra, es buena práctica mantener la verificación
    formulario.addEventListener('submit', function(event) {
      let hasErrors = false;
      console.log('¡Evento submit disparado - Lógica de validación activa!'); // Mensaje de confirmación

      // Función para añadir la clase de error a un elemento
      function addErrorClass(element) {
        hasErrors = true; // Asegurarse de marcar que hay errores
        
        element.classList.add('error-border');
        console.log('Clases de error añadidas a:', element.id || element.className); // Para depuración
      }

      // Función para remover la clase de error a un elemento
      function removeErrorClass(element) {
        element.classList.remove('error-border');
        element.classList.remove('error');
      }

      // --- Limpiar clases de error previas para todos los campos ---
      removeErrorClass(nameInput);
      removeErrorClass(lastNameInput);
      removeErrorClass(emailInput);
      removeErrorClass(messageInput);
      // Aquí también puedes limpiar los mensajes de error existentes
      document.querySelectorAll('.error').forEach(span => span.style.display = 'none');
      // Asegúrate de limpiar también los estados de error de radio buttons y checkbox si aplicas clases a sus contenedores
     // document.querySelectorAll('.error').forEach(el => el.classList.remove('error')); // Quita la clase 'error' de cualquier elemento que la tenga.

      // --- Validaciones ---

      // Validar First Name
      if (!nameInput.value.trim()) {
        addErrorClass(nameInput);
        const nameErrorSpan = document.querySelector('#fName .error'); // Asegúrate de usar la clase correcta para tu span de mensaje
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }

      // ... (Aquí irán las validaciones para Last Name, Email, Query Type, Message, Consent) ...
      // Asegúrate de que cada validación llame a addErrorClass(el_input) y muestre su span de error
      // validate last name
      if (!lastNameInput.value.trim()) {
        addErrorClass(lastNameInput);
        const nameErrorSpan = document.querySelector('#lName .error'); 
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }

      // validate email
      if (!emailInput.value.trim()) {
        addErrorClass(emailInput);
        const nameErrorSpan = document.querySelector('#email .error'); 
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }
      
      
      
      
      
      
      
      
      
      
      // --- Control de envío del formulario ---
      if (hasErrors) {
        event.preventDefault(); // Evita que se envíe el formulario si hay errores
        console.log('Errores detectados. Formulario NO enviado.');
      } else {
        //const successMessage = document.querySelector('.success');
        console.log('Formulario sin errores. Enviando...');
        // formulario.submit()
      }
    });
  } else {
    console.log('Error: No se encontró el formulario con la clase .main-container.');
  }
});

console.log('Script ejecutándose desde el inicio.');