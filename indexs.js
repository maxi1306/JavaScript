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

function calculoCuotas(modelo, cuotas, interes = 0) {
    return 'Precio total:' + modelo + '\n Cantidad de cuotas: ' + cuotas + (interes == 0 ? '\n No posee Interes' : '\n Precio total con Interes: ' + (modelo + modelo * interes));
}
function opcionesMoto(consulta = true){
    do {
        valorm = Number(prompt("Que Modelos vas a llevar? 🏍 \n 1. TNT \n 2. TRK \n 3. IMPERIALE \n 4. NAKED \n 5. TRKX \n 6. LEONCINO \n 7. SALIR"))
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
        if(consulta){
            queModelo.push({moto: mod,
                calculo: ""
            });
        }
    } while (valorm < 1 || valorm > 6)  
}
function opcionesCuotas() {
    let valor = 0
    do {
        valor = Number(prompt("En cuantas Cuotas quieres tu Moto? \n 1. 12 Cuotas c/interes \n 2. 6 Cuotas c/interes \n 3. 1 Cuota s/interes \n 4. Salir"))

        switch (valor) {
            case 1:
                queModelo[queModelo.length-1].calculo = calculoCuotas(queModelo[queModelo.length-1].moto.precio, 12, INTERESDOCE);
                console.log(calculoCuotas(queModelo[queModelo.length-1].moto.precio, 12, INTERESDOCE));
                return

            case 2:
                queModelo[queModelo.length-1].calculo = calculoCuotas(queModelo[queModelo.length-1].moto.precio, 6, INTERESSEIS);
                console.log(calculoCuotas(queModelo[queModelo.length-1].moto.precio, 6, INTERESSEIS));
                return

            case 3:
                queModelo[queModelo.length-1].calculo = calculoCuotas(queModelo[queModelo.length-1].moto.precio, 1);
                console.log(calculoCuotas(queModelo[queModelo.length-1].moto.precio, 1));
                return

            case 4:
                alert("Gracias por Elejirnos! ❤");
                return 0

            default:
                console.log("Seleccione una Opcion");
                break
        }
    } while (valor !== 0 || valor === null)
}
function visualizarConsultas(){
    queModelo.forEach(x => {
        console.table(x.moto)
        console.log(" \n " + x.calculo + " \n ")
    });
}

do {
    opcionesMoto();
    opcionesCuotas();  
    fin = confirm("¿Desea finalizar?");
} while (fin != true)

let seleccion = 0;
do {
    seleccion = Number(prompt("Seleccione una accion a realizar: \n 1. Historial de busquedas \n 2. Eliminar una consulta \n 3. Consultar historial por rango de precios \n 4. Buscar por moto \n 5. Salir"))
    switch (seleccion) {
        case 1:
            console.clear();
            visualizarConsultas();
            break;
        case 2:
            console.clear();
            let eliminar = Number(prompt("Ingrese el numero de consulta a eliminar:")) 
            queModelo.splice(eliminar-1, 1);
            break;
        case 3:
            console.clear();
            let precioMin = Number(prompt("Ingrese el precio minimo:"))
            let precioMax = Number(prompt("Ingrese el precio maximo:"))
            let consulta = queModelo.filter(x => x.moto.precio >= precioMin && x.moto.precio <= precioMax)
            consulta.forEach(x => {
                console.table(x.moto)
                console.log(" \n " + x.calculo + " \n ")
            });
            break;
        case 4:
            console.clear();
            opcionesMoto(false);
            let consulta2 = queModelo.filter(x => x.moto == mod)
            consulta2.forEach(x => {
                console.table(x.moto)
                console.log(" \n " + x.calculo + " \n ")
            });
            break;
        case 5:
            alert("Gracias por Elejirnos! ❤");
            break;
        default:
            alert("Seleccione una Opcion");
            break;
    }
} while (seleccion !== 5)






