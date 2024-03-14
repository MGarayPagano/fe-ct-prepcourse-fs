function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  array.push(elemento)

  for(let i = 0; i <= array.length; i++){
    if(array.length[i] == array.length[elemento]){
      return -1
    }
  }
}

module.exports = encontrarElemento;
