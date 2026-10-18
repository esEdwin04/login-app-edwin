const formulario = document.getElementById("formLogin");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "" || clave === "") {
    mensaje.textContent = "Por favor completa usuario y contraseña.";
    mensaje.className = "error";
    return;
  }

  mensaje.textContent = "Campos completos. Listo para ingresar.";
  mensaje.className = "ok";
});
