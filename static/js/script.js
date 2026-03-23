console.log("Conectado a JS..."); // Imprime mensaje en la consola
let username = localStorage.getItem("username") || ""; // Crea una variable y se le asigna un valor del localStorage, y si no existe, el valor default es vacío
const usernameSpan = document.getElementById("username"); // Obtiene el span donde se mostrará el nombre de usuario
const botonSesion = document.getElementById("boton-sesion"); // Obtiene el botón para inciciar sesión

// Añade al escuchador de eventos cuando el documento HTML haya cargado
document.addEventListener('DOMContentLoaded', () => {
    if (username == "") { // Si el username es vacío
        iniciarSesion(); // Llama a la función iniciarSesion()
    } else {
        usernameSpan.textContent = username; // Establece el contenido del span con el nombre de usuario
    };
});

// Crea la función cerrar sesión
function cerrarSesion() {
    let confirmacion = confirm("¿Seguro que quieres cerrar sesión?"); // Crea una variable y se le asigna de valor una confirmación, en la que aceptar es true y cancelar es false

    if (confirmacion == true) { // si confirmacion es verdadero
        localStorage.setItem("username", ""); // Vacía el nombre de usuario del localStorage
        username = ""; // Asigna el nombre de usuario a vacío
        usernameSpan.textContent = ""; // Elimina el texto del span
        botonSesion.classList.remove("btn-danger"); // Quita la clase btn-danger del botón de sesión
        botonSesion.classList.add("btn-success"); // Añade la clase btn-success del botón de sesión
        botonSesion.textContent = "Iniciar sesión"; // Cambia el texto del botón a "Iniciar sesión"
        botonSesion.onclick = iniciarSesion; // Cambia la función dentro del "onclick" a iniciarSesion
    };
};

// Crea la función iniciarSesion
function iniciarSesion() {
    let usernameTempVer = prompt("Ingresa tu nombre de usuario"); // Crea una variable de verificacion temporal cuyo valor es ingresado por el usuario
    usernameTempVer = usernameTempVer.trim(); // Elimina los espacios del inicio y el final del string
    if (usernameTempVer == "") { // Si el nombre está vacío
        alert("El nombre de usuario no puede estar vacío"); // Alerta diciendo que no puede estar vacío
        botonSesion.classList.remove("btn-danger"); // Quita la clase btn-danger del botón de sesión
        botonSesion.classList.add("btn-success"); // Añade la clase btn-success del botón de sesión
        botonSesion.textContent = "Iniciar sesión"; // Cambia el texto del botón a "Iniciar sesión"
        botonSesion.onclick = iniciarSesion; // Cambia la función dentro del "onclick" a iniciarSesion
    } else { // o si no
        username = usernameTempVer; // Establece la variable del nombre de usuario el valor de la verificacion temporal
        localStorage.setItem("username", usernameTempVer) // Establece el dato del localStorage al valor de la verificacion temporal
        botonSesion.classList.remove("btn-success"); // Quita la clase btn-success del botón de sesión
        botonSesion.classList.add("btn-danger"); // Añade la clase btn-danger del botón de sesión
        botonSesion.textContent = "Cerrar  sesión"; // Cambia el texto del botón a "Cerrar sesión"
        usernameSpan.textContent = username; // Establece el contenido del span con el nombre de usuario
        botonSesion.onclick = cerrarSesion; // Cambia la función dentro del "onclick" a iniciarSesion
    };
};