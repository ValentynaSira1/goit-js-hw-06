const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

function onInputChange(event) {
   if(event.currentTarget.value.trim() !== '') {
    nameLabel.textContent = event.currentTarget.value;
   } else nameLabel.textContent = 'Anonymous';
    }

input.addEventListener('input', onInputChange);