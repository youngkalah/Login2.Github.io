document.getElementById('boton-enviar').addEventListener('click', function(event) {
    event.preventDefault();
    var carga = document.getElementById('carga');
    carga.style.display = 'block';
    var progresoCarga = document.getElementById('progreso-carga');
    var porcentajeCarga = document.getElementById('porcentaje-carga');
    var porcentaje = 0;
    var intervalo = setInterval(function() {
      porcentaje++;
      progresoCarga.style.width = porcentaje + '%';
      porcentajeCarga.textContent = porcentaje + '%';
      if (porcentaje >= 100) {
        clearInterval(intervalo);
        carga.style.display = 'none';
        alert('¡Bienvenido a mi corazón!');
      }
    }, 50);
  });
  