const apiKey = '4c4852a08c39b19808f7f05e57e3c493';

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const ciudad = document.getElementById('ciudad').value;
  const pais = document.getElementById('pais').value;

  if (ciudad && pais) {
    buscarClima(ciudad, pais)
      .then((clima) => {
        mostrarClima(clima);
    })
      .catch((error) => {
        console.error(error);
        mostrarError();
      });
  } else {
    mostrarError();
  }
});