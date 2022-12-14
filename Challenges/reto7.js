function getGiftsToRefill(a1, a2, a3) {
  const items = new Set([...a1, ...a2, ...a3]);
  return [...items].reduce((acc, item) => {
    let count = 0;
    if (a1.includes(item)) count++;
    if (a2.includes(item)) count++;
    if (a3.includes(item)) count++;
    if (count < 2) return acc.concat(item);
    return acc;
  }, []);
}

//from discord
function getGiftsToRefill2(a1, a2, a3) {
  const items = new Set([...a1, ...a2, ...a3]);
  return [...items].filter(
    (item) => a1.includes(item) + a2.includes(item) + a3.includes(item) === 1
  );
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
console.log(gifts);
