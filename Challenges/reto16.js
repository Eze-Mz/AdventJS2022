function fixLetter(letter) {
  return (
    letter
      //Eliminar espacios al inicio y al final
      .trim()
      //Eliminar múltiples espacios en blanco y dejar sólo uno
      .replace(/ +/gm, " ")
      //Dejar un espacio después de cada coma
      .replace(/\?{2,}/g, "?")
      //La primera letra de cada oración debe estar en mayúscula
      .replace(/([\?\.!]\s+)(.)/g, (c) => c.toUpperCase())
      .replace(/^\w/, (f) => f.toUpperCase())
      //Poner un punto al final de la frase si no tiene puntuación (matchea todo lo que no está entre corchetes, que sería aquello que no debe llevar puntos después si está al final)
      .replace(/[^\?.!]$/, (c) => c + ".")
      // elimina espacio antes de separador
      .replace(/\s([,.?!])/g, "$1")
      //Dejar un espacio después de cada coma
      .replace(/,\s*/g, ", ")
      //Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
      .replace(/santa claus/gi, "Santa Claus")
  );
}

const fixed = fixLetter(
  ` hello  ,how are you  ??     do you know if santa claus exists?  i really hope he does!  bye  `
);
console.log(fixed);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

// fixLetter(
//   "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
// );
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
/*
Eliminar espacios al inicio y al final
Eliminar múltiples espacios en blanco y dejar sólo uno
Dejar un espacio después de cada coma
Quitar espacios antes de coma o punto
Las preguntas sólo deben terminar con un signo de interrogación
La primera letra de cada oración debe estar en mayúscula
Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
Poner un punto al final de la frase si no tiene puntuación
 */
