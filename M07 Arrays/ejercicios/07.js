function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    let cadenaMayusculas = array[i].toUpperCase();
    newArray.push(cadenaMayusculas)
  }
  return newArray;
}
module.exports = convertirStringAMayusculas;
