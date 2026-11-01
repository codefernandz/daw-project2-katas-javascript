// EJERCICIO 04

// ================================================================================
//  Dado el siguiente array:
// ================================================================================
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];


// ================================================================================
// 4.1 - Saca a "Tendo" por consola atacando su posición.
// ================================================================================
const getTendo = aldeanos[3];
console.log("El aldeano en la posición 3 es: " + getTendo);


// ================================================================================
// 4.2 - Coloca en el último lugar de este array a "Cervasio".
// ================================================================================
const pushCervasio = aldeanos.push("Cervasio");
console.log("El aldeano agregado al final del array es: " + aldeanos[aldeanos.length - 1]);


// ================================================================================
// 4.3 - Cambia el primer elemento de este array por "Bambina".
// ================================================================================
const changeFirstElement = aldeanos[0] = "Bambina";
console.log("El primer aldeano del array ahora es: " + aldeanos[0]);


// ================================================================================
// 4.4 - Dale la vuelta a este array.
// ================================================================================
const reverseArray = aldeanos.reverse();
console.log("El array invertido es: ", aldeanos);


// ================================================================================
// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
// ================================================================================
console.log("Array antes de cambiar a Narciso por Canela: ", aldeanos);

const changeNarciso = aldeanos.splice(4, 1, "Canela");
console.log("Array después de cambiar a Narciso por Canela: ", aldeanos);


// ================================================================================
// 4.6 - Imprime por consola el último elemento de este array sin atacar
// a la posición explicitamente
//
// Pista: puedes usar el método length con algo más para ello.
// ================================================================================
const lastElement = aldeanos[aldeanos.length - 1];
console.log("El último aldeano del array es: " + lastElement);