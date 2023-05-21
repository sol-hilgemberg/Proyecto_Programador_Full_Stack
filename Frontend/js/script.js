// const form = document.getElementById('form');
// const username = document.getElementById('nombre');
// const email = document.getElementById('email');
// const phone = document.getElementById('celular');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     validateInputs();
// });

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const phone = phone.value.trim();
// };

// Limitar los campos de tipo text con un maxlength
document.querySelectorAll('input[type="text"]').forEach(input =>{
    input.oninput = () => {
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    }
});


// Limitar los campos de tipo numero con un maxlength
document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () => {
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    }
});


// Obtener datos
const form = document.querySelector('#form');
const username = document.querySelector('#nombre');
const email = document.querySelector('#email');
const phone = document.querySelector('#celular');
const message = document.querySelector('#mensaje');

const success = document.querySelector('#success');
const error = document.querySelectorAll('.error');

// Validar datos
function validateForm() {

    clearMessages();
    let errorFlag = false;

    console.log("Validando datos...");
    if(username.value.length < 1) {
        error[0].innerText = "El nombre no puede estar vacio";
        username.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)) {
        error[1].innerText = "El email no es valido";
        email.classList.add("error-border")
        errorFlag = true;
    }

    if(phone.value.length < 1) {
        error[2].innerText = "El numero no es valido";
        phone.classList.add("error-border")
        errorFlag = true;
    }

    if(message.value.length < 1) {
        error[3].innerText = "Por favor, introduzca un mensaje";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
      success.innerText = "Exito!";
      console.log("Nombre: " + username.value + "\n Email: " + email.value + "\n Celular: " + phone.value + "\n Mensaje: " + message.value);
    }


}

// Borra los mensajes de error o de exito

function clearMessages() {
    for(let i = 0; i < error.length; i++) {
        error[i].innerText = "";
    }
    success.innerText = "";
    username.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    message.classList.remove("error-border");
}

// Chequea si el mail es valido
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
