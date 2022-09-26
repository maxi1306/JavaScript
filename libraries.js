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
        title: 'Has vaciado las Consultas'
      })
    queModelo.length = 0
    visualizarConsultas()
    localStorage.removeItem("modeloMoto")
})

// const DataTime = luxon.DateTime;
// const fechaReserva = DataTime.now().toString();
// const btnReserva = document.querySelector('#btnReserv')

// btnReserva.addEventListener('click', () => {

//     Swal.fire({
//       icon: 'info',
//       title: "has hecho una reserva",
//       text: `tu reserva se a hecho a las: ${DataTime.now().toString()}`
//     })
// })