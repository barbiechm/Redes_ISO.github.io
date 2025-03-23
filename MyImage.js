// Mostrar/ocultar capas ISO/OSI y desplazarse hacia ellas
document.getElementById('isoButton').addEventListener('click', function () {
  const isoLayers = document.getElementById('isoLayers');

  // Mostrar u ocultar las capas ISO/OSI
  if (isoLayers.classList.contains('visible')) {
    isoLayers.classList.remove('visible');
    setTimeout(() => {
      isoLayers.classList.add('hidden');
    }, 500); // Espera a que termine la animación
  } else {
    isoLayers.classList.remove('hidden');
    setTimeout(() => {
      isoLayers.classList.add('visible');
    }, 10); // Pequeño retraso para activar la animación
  }

  // Desplazarse suavemente hacia la sección de las capas ISO/OSI
  isoLayers.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Acordeón para las capas
document.querySelectorAll('.layer-header').forEach(header => {
  header.addEventListener('click', () => {
    const layerItem = header.parentElement;
    layerItem.classList.toggle('active');
  });
});