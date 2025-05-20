
// makes clickeable the div with the class "radio-option" so it can mark the radio button as checked, even if the user doesn't click on the radio button 
const radioOptions = document.querySelectorAll('.radio-option');

  radioOptions.forEach(option => {
    option.addEventListener('click', function() {
      const radioInput = this.querySelector('.radio-input');
      if (radioInput) {
        radioInput.checked = true;
        radioInput.dispatchEvent(new Event('change')); // 
      }
    });
  });

// adds the style to the box when the radio button is checked
const radioInputs = document.querySelectorAll('.radio-input'); 

 radioInputs.forEach(input => {
    input.addEventListener('change', function() {
      // the event change is fired when the input is checked or unchecked
      radioInputs.forEach(otherInput => {
        otherInput.closest('.radio-option').classList.remove('selected');
      }); //the method closest() returns the closest ancestor element that matches the specified selector ".radio-option" 
          // and removes the "selected" class from all radio options that are not currently selected
      if (this.checked) { //adds the "selected" class to the currently selected radio option and now the css can be applied
        this.closest('.radio-option').classList.add('selected');
      }
    });
  });


  const formulario = document.querySelector('.main-container'); // Selecciona el formulario por su clase
  const nameInput = document.getElementById('firstName'); // Selecciona los inputs por su ID
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const queryTypeRadios = document.querySelectorAll('input[name="queryType"]');
  const consentCheckbox = document.querySelector('.consent input[type="checkbox"]');
  

formulario.addEventListener('submit', function(event) {
    let hasErrors = false;
    // Función para añadir la clase de error a un elemento
    function addErrorClass(element) {
      hasErrors = true;
      console.log('adios');
      element.classList.add('error');
      element.classList.add('error-border');
    }

     addErrorClass(nameInput);
  });

    // Función para remover la clase de error a un elemento
//    function removeErrorClass(element) {
//    element.classList.remove('error-border');
//    element.classList.remove('error');
    

    // Limpiar las clases de error previas
//    removeErrorClass(nameInput);
//    removeErrorClass(lastNameInput);
//    removeErrorClass(emailInput);
//    removeErrorClass(messageInput);

    // Validar First Name
//    if (!nameInput.value.trim()) {
      
//      addErrorClass(nameInput);
//      const nameErrorSpan = document.querySelector('#fName .error');
//      if (nameErrorSpan) {
//        nameErrorSpan.style.display = 'block';
//      }
//      hasErrors = true;
//    } else {
      
//      nameInput.classList.remove('error-border');
//      const nameErrorSpan = document.querySelector('#fName .error');
//      if (nameErrorSpan) {
//        nameErrorSpan.style.display = 'none';
//      }
//    }

    // Validar Last Name
//    if (!lastNameInput.value.trim()) {
//      addErrorClass(lastNameInput);
//      hasErrors = true;
//    }

    // Validar Email
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
//      addErrorClass(emailInput);
//      hasErrors = true;
//    }

    // Validar Query Type (al menos uno debe estar seleccionado)
//    let queryTypeSelected = false;
//    queryTypeRadios.forEach(radio => {
//      if (radio.checked) {
//        queryTypeSelected = true;
//      }
//    });
//    if (!queryTypeSelected) {
      // Puedes seleccionar el div contenedor o algún elemento relacionado para mostrar el error visual
//      const queryTypeContainer = document.querySelector('#queryType');
//      if (queryTypeContainer) {
//        addErrorClass(queryTypeContainer); // O podrías añadir una clase específica para el error de radio
//      }
//      hasErrors = true;
//    } else {
//      const queryTypeContainer = document.querySelector('#queryType');
//      if (queryTypeContainer && queryTypeContainer.classList.contains('error' || 'error-border')) {
//        removeErrorClass(queryTypeContainer);
//      }
//    }

    // Validar Message
//    if (!messageInput.value.trim()) {
//      addErrorClass(messageInput);
//      hasErrors = true;
//    }

    // Validar Consent (checkbox)
//    if (!consentCheckbox.checked) {
//      const consentContainer = document.querySelector('.consent');
//      if (consentContainer) {
//        addErrorClass(consentContainer); // O podrías añadir una clase específica
//      }
//      hasErrors = true;
//    } else {
//      const consentContainer = document.querySelector('.consent');
//      if (consentContainer && consentContainer.classList.contains('error-border')) {
//        removeErrorClass(consentContainer);
//      }
//    }

//    if (hasErrors) {
//      event.preventDefault(); // Evita que se envíe el formulario si hay errores
//    } else {
//      event.preventDefault();
      //formulario.submit(); // Permite el envío si no hay errores

//    }
     