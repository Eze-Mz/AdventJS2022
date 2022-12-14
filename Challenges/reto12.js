function selectSleigh(distance, sleighs) {
  const bestSleigh = sleighs
    .filter((sleigh) => sleigh.consumption * distance <= 20)
    .pop();
  return bestSleigh ? bestSleigh.name : null;
}

//de discord
function selectSleigh2(distance, sleighs) {
  return [
    { name: null },
    ...sleighs.filter((sleigh) => sleigh.consumption * distance <= 20),
  ].at(-1).name;
}

const distance = 30;
const sleighs = [
  { name: "Dasher", consumption: 0.2 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.2 },
  { name: "Midu", consumption: 1 },
];

console.log(selectSleigh2(distance, sleighs)); // => "Dancer"

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.
