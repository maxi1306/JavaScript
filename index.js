const INTERESVEINTICUATRO = 0.45;
const INTERESDOCE = 0.30;
const INTERESSEIS = 0.15;

const stockMotos = [

    { id: 1, modelo: 'TNT 600i', precio: 3750000, marca: 'Benelli', cilindrada: '600cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1099/conversions/773ddd73d2ca8d75b678e2fc8172dd0f-hd.png", kilometros: '0km' },
    { id: 2, modelo: 'TRK 251', precio: 1385000, marca: 'Benelli', cilindrada: '251cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1302/conversions/8acafe9fcadfc8cb44814e05db6b7575-hd.png", kilometros: '0km' },
    { id: 3, modelo: 'Imperiale 400', precio: 1375000, marca: 'Benelli', cilindrada: '400cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1572/conversions/7ef6a69a963b73b981463f17784994e8-hd.png", kilometros: '0km' },
    { id: 4, modelo: '302S', precio: 1664000, marca: 'Benelli', cilindrada: '300cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1422/conversions/0c14b55d609578a2cd4497bf99be42c7-hd.png", kilometros: '0km' },
    { id: 5, modelo: 'TRK 502X', precio: 3395000, marca: 'Benelli', cilindrada: '500cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1111/conversions/95e20cff7c5d284f2b63178ea91583f2-hd.png", kilometros: '0km' },
    { id: 6, modelo: 'LEONCINO 250 ABS', precio: 1250000, marca: 'Benelli', cilindrada: '250cc', imagen: "https://storage.bbike-cdn.com.cn/benelli.com/media/1967/conversions/4a7e86ca38cccfda57cd25eb8f690959-hd.png", kilometros: '0km' },

];

let queModelo = [];

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modeloMoto")) {
        queModelo = JSON.parse(localStorage.getItem("modeloMoto"))
        visualizarConsultas()
    }
})

stockMotos.forEach(moto => {
    const divMoto = document.createElement("div");
    divMoto.classList.add("row", "g-4", "py-4");
    divMoto.innerHTML = `
    <div class="col p-1">
        <div class="card h-100"
            style="background: radial-gradient(50% 50% at 50% 50%, #88918d 0%, #3c3d3d 100%);">
            <img src="${moto.imagen}" class="card-img-top" alt="${moto.modelo}" />
            <div class="card-body text-white">
              <h5 class="card-title fs-1">${moto.modelo}</h5>
              <p class="card-text">
                Marca: <b>${moto.marca}</b> <br />
                Kilometros: ${moto.kilometros}<br />
                Cilindrada: ${moto.cilindrada}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
                <button href="#" id="consultar${moto.id}" class="btn btnConsulta">Consultar</button>
            </small>
            <small class="text-muted">
                <button href="#" id="reserva${moto.id}" class="btn btnReserva">Reservar</button>
            </small>

        </div>
    </div>
    `
    contenedorMotos.appendChild(divMoto);

    const button = document.getElementById(`consultar${moto.id}`)
    button.addEventListener("click", () => {

        Toastify({
            text: "Has hecho una consulta",
            duration: 3000,
            position: "left",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, #000000, #320299, #000000)",
            },

        }).showToast();

        respuestaClick(moto.id)
    })

    const buttonReserva = document.getElementById(`reserva${moto.id}`)
    buttonReserva.addEventListener("click", () => {

        Toastify({
            text: "Has hecho una reserva",
            duration: 3000,
            position: "right",
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, #000000, #320299, #000000)",
            },

        }).showToast();

        respuestaClickResv(moto.id)
    })

})

function formularioReserva() {
    const contenedorReserva = document.querySelector("#formReserva")
    contenedorReserva.innerHTML = ""
    queModelo.forEach(x => {
        const divReserva = document.createElement("div");
        divReserva.innerHTML = `
        <h3>INGRESE SUS DATOS PARA SU RESERVA</h3>
        <br>
        <h2>Modelo Elejido: <br> $${x.modelo}</h2>
        <br>
        <div class="inputForm">
                    <input type="text" placeholder="Nombre" name="nombre">
                    <input type="text" placeholder="Apellido" name="apellido">
                    <input type="text" name="dni" placeholder="Introduzca su DNI"/>
                    <input type="email" placeholder="Correo Electronico">
                </div>
                <br>
                <p>Eljita la Cantidad de Cuotas:</p>
                <br>
                <select name="Cuotas a Elejir">
                        <option value="84">84 Cuotas</option>
                        <option value="64">64 Cuotas</option>
                        <option value="48">48 Cuotas</option>
                        <option value="36">36 Cuotas</option>
                        <option value="24">24 Cuotas</option>
                        <option value="12">12 Cuotas</option>
                        <option value="6">6 Cuotas</option>
                        <option value="1">1 Cuotas</option>
                        <option value="contado">Al Contado</option>
                    </select>
        <br>
        <small >
        <input type="submit" value="Reservar">
            </small>

        `
        contenedorReserva.append(divReserva)
        divReserva.className = "divReserv"

        localStorage.setItem("modeloMoto", JSON.stringify(queModelo))
    });
}

function respuestaClickResv(motoId) {
    const motoSelecionada = stockMotos.find((moto) => moto.id === motoId)
    queModelo.push(motoSelecionada)

    formularioReserva()
}

function respuestaClick(motoId) {
    const motoSelecionada = stockMotos.find((moto) => moto.id === motoId)
    queModelo.push(motoSelecionada)

    visualizarConsultas()
}

function calculoCuotas(modelo, cuotas, interes = 0) {
    return 'Precio total: ' + modelo + '\n Cantidad de cuotas: ' + cuotas + (interes == 0 ? '\n No posee Interes' : '\n Precio total con Interes: ' + (modelo + modelo * interes));
}

function opcionesCuotas(precio, cuotas, interes) {
    queModelo.calculo = calculoCuotas(precio, cuotas, interes)

    visualizarConsultas()
    return
}

function visualizarConsultas() {
    const contenedor = document.querySelector("#contenedorConsulta")
    contenedor.innerHTML = ""
    queModelo.forEach(x => {
        const precioMotos = document.createElement("div");
        precioMotos.innerHTML = `
        <h1>${x.modelo}:</h1>
        <br>
        <h2>Precio Total: <br> $${x.precio}</h2>
        <br>
        <p>24 Cuotas C/interes de <br> $${x.precio * INTERESVEINTICUATRO} </p>
        <br>
        <p>12 Cuotas C/interes de <br> $${x.precio * INTERESDOCE} </p>
        <br>
        <p>6 Cuotas C/interes de <br> $${x.precio * INTERESSEIS}</p>

        `
        contenedor.append(precioMotos)

        precioMotos.className = "precioMotos"
        localStorage.setItem("modeloMoto", JSON.stringify(queModelo))
    });
}
