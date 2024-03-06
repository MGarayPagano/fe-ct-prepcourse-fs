function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sum = 0;

  for(let i = 1; i <= n;i++){
    sum += i;
  }
  return sum;
}
  //if (n <= 0) {
    //return 0; 
  //} else {
    //return (n * (n + 1)) / 2; 
  //}




module.exports = sumarHastaN;
