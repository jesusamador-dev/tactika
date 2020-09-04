  //   Enviando el formulario de bolsa de trabajo

  const formContacto = document.getElementById("formContacto");
  formContacto.addEventListener("submit", function(e) {
      e.preventDefault();
      var datos = new FormData(formBolsaTrabajo);
      fetch('./web/app/contacto.php', {
              method: 'POST',
              body: datos
          })
          .then(res => res.json())
          .then(data => {
              if (data.message === "true") {
                  Swal.fire({
                      icon: 'success',
                      title: '¡Correcto!',
                      text: 'Tu mensaje se envió correctamente'
                  })
              } else {
                  Swal.fire({
                      icon: 'warning',
                      title: 'Ocurrió un problema',
                      text: 'Lo sentimos, no se ha podido enviar tu mensaje, intenta más tarde.'
                  })
              }
          }).catch(err => {
              Swal.fire({
                  icon: 'warning',
                  title: 'Ocurrió un problema',
                  text: 'Lo sentimos, no se ha podido enviar tu mensaje, intenta más tarde.'
              });
          });
  });