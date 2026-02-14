// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {

  const inputTexto = document.getElementById('textoInput');
  const resultado = document.getElementById('resultado');
  const btnValidar = document.getElementById('btnValidar');

  // Función que retorna una PROMISE
  function validarVocal(cadena) {
    return new Promise((resolve, reject) => {
      if (cadena.length === 0) {
        reject('La cadena está vacía');
        return;
      }

      const ultimoCaracter = cadena.slice(-1).toLowerCase();
      const vocales = ['a', 'e', 'i', 'o', 'u'];

      if (vocales.includes(ultimoCaracter)) {
        resolve(ultimoCaracter);
      } else {
        reject('El caracter no es una vocal');
      }
    });
  }

  // Evento del botón
  btnValidar.addEventListener('click', () => {
    const texto = inputTexto.value.trim();

    validarVocal(texto)
      .then(vocal => {
        resultado.innerHTML = `
          <div class="alert alert-success">
            Termina en vocal: <strong>${vocal}</strong>
          </div>
        `;
      })
      .catch(error => {
        resultado.innerHTML = `
          <div class="alert alert-danger">
            ${error}
          </div>
        `;
      });
  });

});
