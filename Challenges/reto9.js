function countTime(leds) {
  let secs = 0;
  while (leds.some((led) => led === 0)) {
    secs += 7;
    let lightLeds = leds.map((led, i) => {
      if (led === 0 && leds.at(i - 1) === 1) {
        return 1;
      } else {
        return led;
      }
    });
    leds = lightLeds;
  }
  return secs;
}

//from discord
function countTime2(leds) {
  let secs = 0;
  while (leds.some((led) => led === 0)) {
    secs += 7;
    for (let i = 0; i < leds.length; i++) {
      if (leds[i] === 0 && leds[(i + leds.length - 1) % leds.length] === 1) {
        leds[i] = 1;
        i++;
      }
    }
    secs += 7;
  }
  return secs;
}

//con esta propuesta resulta más complejo considerar estos casos: leds =[0, 0, 1, 0, 0]
function countTime3(leds) {
  let max = 0;

  leds.reduce((acc, curr) => {
    if (acc > max) max = acc;
    return !curr ? (acc += 1) : (acc = 0);
  }, 0);
  return max === 0 ? 7 : max * 7;
}

//there is no need to change the array, we just need to count the larger line of zeros.
function countTime4(leds) {
  let zeros = leds.join("").split("1");
  if (leds[leds.length - 1] === 0) {
    zeros[0] += zeros.pop();
  }
  return Math.max(...zeros.map((e) => e.length)) * 7;
}

const leds = [0, 1, 1, 0, 1];
console.log(countTime4([0, 0, 0, 1])); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

//countTime([0, 0, 0, 1]); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

//countTime([0, 0, 1, 0, 0]); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

/* console.log(
  [0, 0, 0, 1, 0, 0, 0, 0].reduce((acc, curr) => {
    console.log(acc);
    return !curr ? (acc += 1) : (acc = 0);
  }, 0)
); */
