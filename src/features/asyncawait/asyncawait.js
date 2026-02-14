// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {

  const inputNumero = document.getElementById('numeroInput');
  const resultado = document.getElementById('resultado');
  const btnCalcular = document.getElementById('btnCalcular');

  // Función que retorna una promesa
  function obtenerDoble(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(numero)) {
          reject('El valor ingresado no es un número');
        } else {
          resolve(numero * 2);
        }
      }, 2000);
    });
  }

  // Función ASÍNCRONA usando async/await
  async function calcularDoble() {
    const numero = Number(inputNumero.value);

    if (inputNumero.value === '') {
      resultado.innerHTML = `
        <div class="alert alert-warning">
          Por favor ingrese un número
        </div>
      `;
      return;
    }

    resultado.innerHTML = `
      <div class="alert alert-info">
        Calculando...
      </div>
    `;

    try {
      const doble = await obtenerDoble(numero);

      resultado.innerHTML = `
        <div class="alert alert-success">
          El doble del número es: <strong>${doble}</strong>
        </div>
      `;
    } catch (error) {
      resultado.innerHTML = `
        <div class="alert alert-danger">
          ${error}
        </div>
      `;
    }
  }

  // Evento del botón
  btnCalcular.addEventListener('click', calcularDoble);

});
