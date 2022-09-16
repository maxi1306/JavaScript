const INTERESDOCE = 0.30;
const INTERESSEIS = 0.15;

const TNT = {
    modelo: 'TNT 600i',
    precio: 3750000,
    marca: 'Benelli',
    cilindrada: '600cc',
    año: 2022,
    kilometros: '0km'
}

const TRK = {
    modelo: 'TRK 251',
    precio: 1385000,
    marca: 'Benelli',
    cilindrada: '251cc',
    año: 2022,
    kilometros: '0km'
}

const IMPERIALE = {
    modelo: 'Imperiale 400',
    precio: 1375000,
    marca: 'Benelli',
    cilindrada: '400cc',
    año: 2022,
    kilometros: '0km'
}

const NAKED = {
    modelo: '302S',
    precio: 1664000,
    marca: 'Benelli',
    cilindrada: '300cc',
    año: 2022,
    kilometros: '0km'
}

const TRKX = {
    modelo: 'TRK 502X',
    precio: 3395000,
    marca: 'Benelli',
    cilindrada: '500cc',
    año: 2022,
    kilometros: '0km'
}

const LEONCINO = {
    modelo: 'LEONCINO 250 ABS',
    precio: 1250000,
    marca: 'Benelli',
    cilindrada: '250cc',
    año: 2022,
    kilometros: '0km'
}

const queModelo = [];

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)

function respuestaClick() {
    opcionesMoto()
    opcionesCuotas()
}

function opcionesMoto(consulta = true) {
    do {
        valorm = Number(prompt("Que Modelo te interesa? 🏍 \n 1. TNT \n 2. TRK \n 3. IMPERIALE \n 4. NAKED \n 5. TRKX \n 6. LEONCINO \n 7. SALIR"))
        if (valorm === 1) {
            //console.table(TNT)
            mod = TNT;
        } else if (valorm === 2) {
            //console.table(TRK)
            mod = TRK;
        } else if (valorm === 3) {
            //console.table(IMPERIALE)
            mod = IMPERIALE;
        } else if (valorm === 4) {
            //console.table(NAKED)
            mod = NAKED;
        } else if (valorm === 5) {
            //console.table(TRKX)
            mod = TRKX;
        } else if (valorm === 6) {
            //console.table(LEONCINO)
            mod = LEONCINO;
        } else if (valorm === 7) {
            alert("Gracias por Elejirnos! ❤");
            break
        } else alert("Elejiste una opcion invalida ❌")
        if (consulta) {
            queModelo.push({
                moto: mod,
                calculo: ""
            });
        }
    } while (valorm < 1 || valorm > 6)
}

function calculoCuotas(modelo, cuotas, interes = 0) {
    return 'Precio total: ' + modelo + '\n Cantidad de cuotas: ' + cuotas + (interes == 0 ? '\n No posee Interes' : '\n Precio total con Interes: ' + (modelo + modelo * interes));
}

function opcionesCuotas() {
    let valor = 0
    do {
        valor = Number(prompt("En cuantas Cuotas quieres tu Moto? \n 1. 12 Cuotas c/interes \n 2. 6 Cuotas c/interes \n 3. 1 Cuota s/interes \n 4. Salir \n 0. finalizar"))

        switch (valor) {
            case 1:
                queModelo[queModelo.length - 1].calculo = calculoCuotas(queModelo[queModelo.length - 1].moto.precio, 12, INTERESDOCE);

                visualizarConsultas()
                return

            case 2:
                queModelo[queModelo.length - 1].calculo = calculoCuotas(queModelo[queModelo.length - 1].moto.precio, 6, INTERESSEIS);

                visualizarConsultas()
                return

            case 3:
                queModelo[queModelo.length - 1].calculo = calculoCuotas(queModelo[queModelo.length - 1].moto.precio, 1);

                visualizarConsultas()

                return

            case 4:
                alert("Gracias por Elejirnos! ❤");
                return 0

            case 0:
                visualizarConsultas()
                break

            default:
                console.log("Seleccione una Opcion");
                break
        }
    } while (valor !== 0 || valor === null)
}

function visualizarConsultas() {
    const contenedor = document.querySelector("#contenedor")
    contenedor.innerHTML = ""
    queModelo.forEach(x => {
        const precioMotos = document.createElement("div");
        precioMotos.innerHTML = `
        <h1>${x.moto.modelo}</h1>
        <br>
        <h3>${x.calculo}</h3>
        <br>
        `
        contenedor.append(precioMotos)
        precioMotos.className = "precioMotos"
    });
}
