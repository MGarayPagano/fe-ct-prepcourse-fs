function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let numCadena = num.toString();
  return numCadena.length === 3;
}

module.exports = tieneTresDigitos;
