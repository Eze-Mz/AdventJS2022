function checkJump(heights) {
  const maxIndex = heights.indexOf(Math.max(...heights));

  const up = heights.slice(0, maxIndex + 1);

  const down = heights.slice(maxIndex);

  if (up.length === 1 || down.length === 1) return false;
  return (
    up.join("") === up.sort((a, b) => a - b).join("") &&
    down.join("") === down.sort((a, b) => b - a).join("")
  );
}
function checkJump2(heights) {
  const max = Math.max(...heights);
  const maxIndex = heights.indexOf(max);
  return heights.at(0) === max || heights.at(-1) === max
    ? false
    : heights.reduce((acc, el, i, arr) => {
        if (acc === false) arr.splice(1);
        return i > maxIndex ? el <= arr[i - 1] : el >= arr[i - 1];
      });
}

//from discord
function checkJump3(heights) {
  const max = Math.max(...heights);
  if (heights.at(0) === max || heights.at(-1) === max) return false;
  const maxIndex = heights.lastIndexOf(max);
  return heights.every((h, i) => {
    if (i === 0) return true;
    return i <= maxIndex ? h >= heights[i - 1] : h <= heights[i - 1];
  });
}

//respuesta de discord interesante
function checkJump(heights) {
  // creamos un diccionario para mapear los tramos donde:
  //  sube: ocurre cuando la altura actual es mayor que la anterior     | sign = 1    -> 'u' (up)
  //  baja: ocurre cuando la altura actual es menor que la anterior     | sign = -1   -> 'd' (down)
  //  estanca: ocurre cuando las alturas actual y anterior son iguales  | sign = 0    -> ''  (vacio)
  //  estanca: la diferencia de alturas da un valor no numérico         | sign = NaN  -> ''  (vacio)

  // Luego formamos una cadena de la forma:
  // [ 1, 3, 8, 5, 2 ]  -> uudd : sube sube baja baja
  // [ 1, 7, 3, 5 ]     -> udu  : sube baja sube

  // Y el problema sólo se resuelve cuando la cadena resultado
  // empiece con al menos una 'u' y termine con al menos una 'd'
  // cuyo regex sería --> /^[u]+[d]+$/g

  const dict = { NaN: "", 0: "", "-1": "d", 1: "u" };

  const str = heights.reduce((result, height, i) => {
    const sign = Math.sign(height - heights[i - 1]);
    return result + dict[sign];
  }, "");

  return str.match(/^[u]+[d]+$/g) !== null;
}

let heights = [[1, 2, 1]];
/* console.log(checkJump2([1, 2, 1]));
console.log(checkJump2([1, 3, 8, 5, 2]));
console.log(checkJump2([1, 7, 3, 5]));
console.log(checkJump2([1, 2, 3, 2, 1]));*/
//console.log(checkJump2([1, 2, 2, 2, 1]));
//console.log(checkJump2([2, 2, 2, 2]));
console.log(checkJump3([1, 2, 2, 2, 1, 1, 1]));

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

/* heights = [1, 7, 3, 5]
checkJump(heights) */ // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3*/
