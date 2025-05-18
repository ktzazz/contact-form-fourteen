document.addEventListener('DOMContentLoaded', function() {
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
});

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
