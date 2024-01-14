document.addEventListener('DOMContentLoaded', function() {
    // Simulación de datos de mascotas
    const mascotas = [
      { nombre: 'Rex', tipo: 'perro' },
      { nombre: 'Mochi', tipo: 'gato' },
    ];
  
    // Función para mostrar las mascotas en la página
    function mostrarMascotas() {
      const listaMascotas = document.getElementById('lista-mascotas');
      listaMascotas.innerHTML = '';
  
      mascotas.forEach(mascota => {
        const elementoMascota = document.createElement('div');
        elementoMascota.innerHTML = `<h3>${mascota.nombre}</h3><p>Tipo: ${mascota.tipo}</p>`;
        listaMascotas.appendChild(elementoMascota);
      });
    }
  
    // Llamamos a la función al cargar la página
    mostrarMascotas();
  
    // Manejo del formulario de adopción
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const tipoMascota = document.getElementById('tipo-mascota').value;
  
      // Simulación de envío de solicitud 
      alert(`¡Solicitud enviada!\nNombre: ${nombre}\nTipo de Mascota: ${tipoMascota}`);
    });
  });
  