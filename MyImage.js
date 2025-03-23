
document.getElementById('isoButton').addEventListener('click', function () {
  const isoLayers = document.getElementById('isoLayers');

  if (isoLayers.classList.contains('visible')) {
    isoLayers.classList.remove('visible');
    setTimeout(() => {
      isoLayers.classList.add('hidden');
    }, 500); 
  } else {
    isoLayers.classList.remove('hidden');
    setTimeout(() => {
      isoLayers.classList.add('visible');
    }, 10); 
  }

  
  isoLayers.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


document.querySelectorAll('.layer-header').forEach(header => {
  header.addEventListener('click', () => {
    const layerItem = header.parentElement;
    layerItem.classList.toggle('active');
  });
});