const vaciar = document.getElementById("vaciar")
vaciar.addEventListener("click", () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Has vaciado las Consultas y/o Reserva'
      })
    queModelo.length = 0
    visualizarConsultas()
    formularioReserva()
    localStorage.removeItem("modeloMoto")
})
