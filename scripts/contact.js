document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulario enviado! (esto es solo una demostración)');
        });

      