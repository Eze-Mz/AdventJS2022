function dryNumber(dry, numbers) {
  return new Array(numbers)
    .fill()
    .map((_, i) => `${i + 1}`)
    .filter((e) => e.includes(dry))
    .map((e) => parseInt(e));
}

//form discord, other option
function dryNumber2(dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => i + 1).filter((n) =>
    n.toString().includes(dry.toString())
  );
}

console.log(dryNumber2(1, 15)); // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20); // [2, 12, 20]

// no tenemos tinta para el 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
