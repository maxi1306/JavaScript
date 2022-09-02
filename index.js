const INTERESDOCE = 0.30;
const INTERESSEIS = 0.15;

const NAKED = {
    modelo: 'TNT 600i',
    precio: 3750000,
    marca: 'Benelli',
    cilindrada: '600cc',
    año: 2022,
    kilometros: '0km'
}

const TOURING = {
    modelo: 'TRK 502 X',
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

const queModelo = [NAKED, TOURING, LEONCINO];


do {

    valorm = Number(prompt("Que Modelos vas a llevar? 🏍 \n 1. NAKED \n 2. TOURING \n 3. LEONCINO"))
    if (valorm === 1) {
        console.table(queModelo[0])
    } else if (valorm === 2) {
        console.table(queModelo[1])
    } else if (valorm === 3) {
        console.table(queModelo[2])
    } else alert("Elejiste una opcion invalida")

} while (valorm < 1 || valorm > 3)

function calculoCuotas(modelo, cuotas, interes = 0) {
    console.log('Precio total:' + modelo + '\n cantidad de cuotas: ' + cuotas + (interes == 0 ? '\n No posee Interes' : '\n Precio total con Interes: ' + (modelo + modelo * interes)))

}

function opcionesModelos() {
    let valor = 0
    do {
        valor = Number(prompt("En cuantas Cuotas quieres tu Moto? \n 1. 12 Cuotas c/interes \n 2. 6 Cuotas c/interes \n 3. 1 Cuota s/interes \n 4. Salir"))

        switch (valor) {
            case 1:

                calculoCuotas(queModelo[1].precio, 12, INTERESDOCE);
                return

            case 2:
                calculoCuotas(queModelo[1].precio, 6, INTERESSEIS);
                return

            case 3:
                calculoCuotas(queModelo[1].precio, 1);
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

opcionesModelos()
