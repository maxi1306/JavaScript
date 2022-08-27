const NAKED = 3750000;
const TOURING = 3250000;
const LEONCINO = 1250000;
const INTERESDOCE = 0.30;
const INTERESSEIS = 0.15;


do {

    valor = Number(prompt("Que Modelos vas a llevar? \n 1. NAKED \n 2. TOURING \n 3. LEONCINO"))
    if (valor === 1) {
        queModelo = NAKED
        console.log(queModelo)
    } else if (valor === 2) {
        queModelo = TOURING
        console.log(queModelo)
    } else if (valor === 3) {
        queModelo = LEONCINO
        console.log(queModelo)
    } else alert("elejiste una opcion invalida")

} while (valor < 1 || valor > 3)

function calculoCuotas(modelo, cuotas, interes = 0) {
    console.log('Precio total:' + modelo + '\n cantidad de cuotas: ' + cuotas + (interes == 0 ? '\n No posee Interes' : '\n Precio total con Interes: ' + (modelo + modelo * interes)))

}

function opcionesModelos() {
    let valor = 0
    do {
        valor = Number(prompt("En cuantas Cuotas quieres tu Moto? \n 1. 12 Cuotas c/interes \n 2. 6 Cuotas c/interes \n 3. 1 Cuota s/interes \n 4. Salir"))

        switch (valor) {
            case 1:
                calculoCuotas(queModelo, 12, INTERESDOCE);
                return

            case 2:
                calculoCuotas(queModelo, 6, INTERESSEIS);
                return

            case 3:
                calculoCuotas(queModelo, 1);
                return

            case 4:
                console.log("Gracias por Elejirnos.");
                return 0

            default:
                console.log("seleccione una opcion");
                break
        }
    } while (valor !== 0 || valor === null)
}

opcionesModelos()
