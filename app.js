let botonElem = document.getElementById('boton-cambiar');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function genAleatorio (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceAleatorio = genAleatorio(0, citas.length)
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();
botonElem.addEventListener('click', cambiarCita)