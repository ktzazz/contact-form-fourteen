document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('.main-container');
  // Asegúrate de que todos tus inputs y elementos relacionados estén seleccionados aquí dentro:
  const nameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const queryTypeRadios = document.querySelectorAll('input[name="queryType"]'); // the radio buttons to see if one is selected
  const queryTypeErrorSpan = document.querySelector('#qType .error'); // the error span on query type
  const consentCheckbox = document.querySelector('.consent input[type="checkbox"]');

  // to make the hole div clickable
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

  // to change the appearence of the selected radio
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

  // form validation
  if (formulario) { //verify if the form exists
    formulario.addEventListener('submit', function(event) {
      let hasErrors = false;
      console.log('¡Evento submit disparado - Lógica de validación activa!'); // Mensaje de confirmación

      // function to add error-border class to an element not the .error(text) because the .error(text) is a span and it did some weird things when adding both at the same time
      function addErrorClass(element) {
        hasErrors = true; // to set errors to true
        element.classList.add('error-border');
      }

      // to remove the error-border class and the error text just in case
      function removeErrorClass(element) {
        element.classList.remove('error-border');
        element.classList.remove('error');
      }

      // to remove the error styles to every input
      removeErrorClass(nameInput);
      removeErrorClass(lastNameInput);
      removeErrorClass(emailInput);
      removeErrorClass(messageInput);
      document.querySelectorAll('.error').forEach(span => span.style.display = 'none');

      // validate First Name
      if (!nameInput.value.trim()) {
        addErrorClass(nameInput);
        const nameErrorSpan = document.querySelector('#fName .error'); // Asegúrate de usar la clase correcta para tu span de mensaje
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }

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
        const nameErrorSpan = document.querySelector('#mail .error'); 
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }

      //to remove the error message from the query type
      if (queryTypeErrorSpan) {
        queryTypeErrorSpan.style.display = 'none';
        queryTypeErrorSpan.classList.remove('error'); 
    }

    // validate query type
    let selectedQuery = false;
    queryTypeRadios.forEach(radio => {
        if (radio.checked) {
            selectedQuery = true;
        }
    });
    if (!selectedQuery) {
        hasErrors = true;
        if (queryTypeErrorSpan) { 
            queryTypeErrorSpan.style.display = 'block';
            queryTypeErrorSpan.classList.add('error'); 
        } else {
        if (queryTypeErrorSpan) {
            queryTypeErrorSpan.style.display = 'none';
            // Asegúrate de usar la CLASE CORRECTA aquí para removerla
            queryTypeErrorSpan.classList.remove('error'); 
        }
    }}
      
      // validate message
      if (!messageInput.value.trim()) {
        addErrorClass(messageInput);
        const nameErrorSpan = document.querySelector('#msg .error'); 
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }

      // validate consent
      if (!consentCheckbox.checked) {
        const nameErrorSpan = document.querySelector('#cons .error'); 
        if (nameErrorSpan) {
          nameErrorSpan.style.display = 'block';
        }
      }
      
      // send form or not 
      if (hasErrors) {
        event.preventDefault(); // Evita que se envíe el formulario si hay errores
        console.log('Errores detectados. Formulario NO enviado.');
      } else {
        //const successMessage = document.querySelector('.success');
        console.log('Formulario sin errores. Enviando...');
       formulario.submit()
      }
    });
  } else {
    console.log('Error: No se encontró el formulario con la clase .main-container.');
  }
});
