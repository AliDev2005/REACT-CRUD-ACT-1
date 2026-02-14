// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {

  // Bases de datos
  const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
  const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

  const inputPais = document.getElementById('paisInput');
  const resultado = document.getElementById('resultado');
  const btnBuscar = document.getElementById('btnBuscar');

  // Callback cuando se encuentra el país
  function encontrado() {
    mostrarMensaje('País encontrado', 'success');
  }

  // Mostrar mensaje
  function mostrarMensaje(mensaje, tipo) {
    resultado.innerHTML = `
      <div class="alert alert-${tipo}">
        ${mensaje}
      </div>
    `;
  }

  // Búsqueda en baseDatos2
  function busquedaBaseDatos2(pais, callbackEncontrado) {
    if (baseDatos2.includes(pais)) {
      callbackEncontrado();
    } else {
      mostrarMensaje('Dato no encontrado', 'danger');
    }
  }

  // Búsqueda en baseDatos1
  function busquedaBaseDatos1(pais, callbackEncontrado, callbackBusqueda2) {
    if (baseDatos1.includes(pais)) {
      callbackEncontrado();
    } else {
      callbackBusqueda2(pais, callbackEncontrado);
    }
  }

  // Evento del botón
  btnBuscar.addEventListener('click', () => {
    const pais = inputPais.value.trim();

    if (pais === '') {
      mostrarMensaje('Por favor ingrese un país', 'warning');
      return;
    }

    busquedaBaseDatos1(pais, encontrado, busquedaBaseDatos2);
  });

});
