// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para manejar los cambios de color
function manejarCambioColor() {
  const rojo = inputRojo.value;
  const verde = inputVerde.value;
  const azul = inputAzul.value;

  textoRojo.textContent = `Rojo: ${rojo}`;
  textoVerde.textContent = `Verde: ${verde}`;
  textoAzul.textContent = `Azul: ${azul}`;

  actualizarColor(rojo, verde, azul);
}

inputRojo.addEventListener('change', manejarCambioColor);

inputVerde.addEventListener('change', manejarCambioColor);

inputAzul.addEventListener('change', manejarCambioColor);


manejarCambioColor();