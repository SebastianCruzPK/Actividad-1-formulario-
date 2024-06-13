document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validar si algún campo está vacío
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        // Mostrar la alerta de formulario enviado con éxito
        alert('Formulario enviado con éxito!\n' +
              'Nombre: ' + name + '\n' +
              'Correo: ' + email + '\n' +
              'Mensaje: ' + message);


    }
});
