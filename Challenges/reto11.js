/*Segundo intento, después de ver las ideas de otros en discord. Se trata de darse cuenta que la división en sí misma (de la parte sobre el total) ya expresa la porciónde la tarea realizada. Lo único que haría falta es llevarla a su mínima expresión y para eso es necesario el mcd, para dividir numerador y denominador por ese número. */
function getCompleted(part, total) {
  const getMcd = (a, b) => (b === 0 ? a : getMcd(b, a % b));
  const partSeg =
    +part.slice(0, 2) * 3600 + +part.slice(3, 5) * 60 + +part.slice(6);
  const totalSeg =
    +total.slice(0, 2) * 3600 + +total.slice(3, 5) * 60 + +total.slice(6);
  const mcd = getMcd(totalSeg, partSeg);

  return `${partSeg / mcd}/${totalSeg / mcd}`;
}

// getCompleted("01:00:00", "03:00:00"); // '1/3'
// getCompleted("02:00:00", "04:00:00"); // '1/2'
// getCompleted("01:00:00", "01:00:00"); // '1/1'
// getCompleted("00:10:00", "01:00:00"); // '1/6'
// getCompleted("01:10:10", "03:30:30"); // '1/3'
getCompleted2("03:30:30", "05:50:50"); // '3/5

/*
La dificultad del problema radica en expresar la respuesta en forma de fracción. 
Para saber cuánto se ha completado de la tarea se pueden llevar ambos tiempos a la misma unidad (segundos por ejemplo) y luego dividir.
*/

/*mi primera idea usando pensando en pasar del decimal a al fracción. El algoritmo está tomando de stacoverflow:
https://stackoverflow.com/questions/14002113/how-to-simplify-a-decimal-into-the-smallest-possible-fraction/14011299#14011299 
Utiliza la continuidad de fracciones para calcular numerador y denominador.
*/
function getCompleted2(part, total) {
  const partSeg =
    +part.slice(0, 2) * 3600 + +part.slice(3, 5) * 60 + +part.slice(6);
  const totalSeg =
    +total.slice(0, 2) * 3600 + +total.slice(3, 5) * 60 + +total.slice(6);
  function toRational(x) {
    var m = Math.floor(x),
      x_ = 1 / (x - m),
      p_ = 1,
      q_ = 0,
      p = m,
      q = 1;
    if (x === m) return { n: p, d: q };
    while (Math.abs(x - p / q) > Number.EPSILON) {
      m = Math.floor(x_);
      x_ = 1 / (x_ - m);
      [p_, q_, p, q] = [p, q, m * p + p_, m * q + q_];
    }
    return isNaN(x) ? NaN : { n: p, d: q };
  }
  const res = toRational(partSeg / totalSeg);
  return `${res.n}/${res.d}`;
}
