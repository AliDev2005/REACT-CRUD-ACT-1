document.addEventListener('DOMContentLoaded', () => {

  const btnMostrar = document.getElementById('btnMostrar');
  const resultado = document.getElementById('resultado');

  btnMostrar.addEventListener('click', () => {

    // Objeto creado dentro del JS
    const person = {
      name: 'Juan Carlos Valencia',
      age: 30,
      city: 'Cali',
      profession: 'Desarrollador'
    };

    // Destructuring del objeto
    const { name, age, profession } = person;

    // Mostrar los datos
    resultado.innerHTML = `
      <div class="alert alert-success">
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Profesión:</strong> ${profession}</p>
      </div>
    `;
  });

});
