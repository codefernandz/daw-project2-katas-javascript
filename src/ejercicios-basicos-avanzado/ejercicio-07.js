// EJERCICIO 7

// ================================================================================
// Completa esta función para que, al recibir dos números por argumento,
// te devuelva por consola el más alto de los dos.
// ================================================================================
function greaterNumber(numberOne, numberTwo) {
  // Completar código
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else if (numberTwo > numberOne) {
    console.log(numberTwo);
  } else {
    console.log("Los dos números son iguales");
  }
}

greaterNumber(10, 20); // Debería imprimir 20
greaterNumber(30, 15); // Debería imprimir 30
greaterNumber(5, 5); // Debería imprimir "Los dos números son iguales"
