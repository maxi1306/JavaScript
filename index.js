let entrada = prompt ('Bienvenidos al Escape Room '+ "\n" + 'Porfavor Ingrese el nombre de su Grupo y luego ingrese los nombres de los participantes (6 Max)');
console.log('Nombre del Grupo:' + entrada)

for (let i = 1; i <= 6; i++) {
    var nombre = prompt("Ingrese el nombre de un Participante");

    if (!isNaN(nombre)) {
        alert("Ingreso un nombre invalido");
        break;
    }

    alert("Bienvenido " + nombre);
     console.log("Jugador Nº " + i + ": " + nombre);


 }

 if (isNaN(nombre)) {
    alert('¡Felicitaciones, Ya has Reservado el Ingreso al Escape Room!');

 }

