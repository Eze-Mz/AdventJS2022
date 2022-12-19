function carryGifts(gifts, maxWeight) {
  const bags = [];
  let bag = "";
  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift) => {
      if (bag.split(" ").join("").length + gift.length > maxWeight) {
        bags.push(bag);
        bag = "";
      }
      bag ? (bag += ` ${gift}`) : (bag += gift);
    });
  if (bag) bags.push(bag);

  return bags;
}

//from discord, this does the same as my attempt but better and with better performance
function carryGifts2(gifts, maxWeight) {
  let bags = new Set();
  let bag = [];
  let weight = 0;

  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift) => {
      if (weight + gift.length > maxWeight) {
        bag = [];
        weight = 0;
      }
      bag.push(gift);
      weight += gift.length;
      bags.add(bag);
    });

  return [...bags].map((sac) => sac.join(" "));
}

//from discord, solution using regex
//about the match funtion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
function carryGifts3(gifts, maxWeight) {
  const regexOMG = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, "g");
  return gifts.join(" ").match(regexOMG) || [];
}

console.log(carryGifts3(["game", "bike", "book", "toy"], 10));
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

//console.log(carryGifts(["game", "bike", "book", "toy"], 7));
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

//console.log(carryGifts(["game", "bike", "book", "toy"], 4));
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

//console.log(carryGifts(["toy", "gamme", "toy", "bike"], 6));
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro
