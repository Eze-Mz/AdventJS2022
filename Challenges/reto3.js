function distributeGifts(packOfGifts, reindeers) {
  const packWeight = packOfGifts.reduce((acc, curr) => (acc += curr.length), 0);

  const carryCapacity = reindeers.reduce(
    (acc, curr) => (acc += curr.length * 2),
    0
  );

  return Math.floor(carryCapacity / packWeight);
}

/**
 * For the nexts anwers see:
 * https://stackoverflow.com/questions/45990973/the-logic-of-number-0-statement-gives-an-integer-in-javascript
 * https://stackoverflow.com/questions/7487977/using-bitwise-or-0-to-floor-a-number
 */

//from discord
function distributeGifts2(packOfGifts, reindeers) {
  return ((reindeers.join("").length * 2) / packOfGifts.join("").length) | 0;
}

//from discord
const distributeGifts3 = (packOfGifts, reindeers) =>
  ((reindeers.join("").length * 2) / packOfGifts.join("").length) | 0;

//from discord
const distributeGifts4 = (packOfGifts, reindeers) =>
  ((reindeers.join("").length << 1) / packOfGifts.join("").length) >> 0;

const packOfGifts = ["book", "doll", "ball"];
const packOfGifts2 = ["bookdollball"];
const reindeers = ["d", "d", "c"];
const reindeers2 = ["d", "d"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
const answer = distributeGifts(packOfGifts2, reindeers2); // 2
console.log(answer);
