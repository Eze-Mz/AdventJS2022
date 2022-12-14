//tiene que devolver un número que representa el número más alto, dentro de un límite, de regalos a entregar combinando un máximo de x números, siendo x la cantidad de ciudades.
//max(max(max(max())))

//base case: maxCities = 0 || maxGifts = 0) return 0

//the gifts for the city > maxGifts ? getMaxGifts(giftsCities.shift(), maxGifts, maxCities)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  if (giftsCities.length === 0) return 0;
  if (maxCities === 0 || maxGifts === 0) return 0;
  const gifts = giftsCities[0];
  if (maxGifts >= gifts) {
    return Math.max(
      gifts +
        getMaxGifts(giftsCities.slice(1), maxGifts - gifts, maxCities - 1),
      getMaxGifts(giftsCities.slice(1), maxGifts, maxCities)
    );
  } else {
    return getMaxGifts(giftsCities.slice(1), maxGifts, maxCities);
  }
}

const giftsCities = [20, 3, 11, 10, 5];
const maxGifts = 20;
const maxCities = 3;
//3 elementos -> 10
//2 elementos -> 10
//1 elementos -> 5

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.
console.log(getMaxGifts2(giftsCities, maxGifts, maxCities));
// 20
/* getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100 */

//from discord
function getMaxGifts2(giftsCities, maxGifts, maxCities) {
  let comb = 2 ** giftsCities.length,
    best = 0,
    visits,
    gifts;
  while (comb--) {
    visits = 0;
    gifts = giftsCities.reduce((total, gifts, i) => {
      if (!(comb & (1 << i))) return total;
      visits++;
      return total + gifts;
    }, 0);
    if (visits <= maxCities && gifts <= maxGifts && gifts > best) {
      best = gifts;
    }
  }
  return best;
}

//from discord
function getMaxGifts3(giftsCities, maxGifts, maxCities) {
  let max = 0;

  const backtrack = (nums, path) => {
    let sum = 0;
    path.forEach((item) => {
      sum += item;
    });
    if (sum > max && sum <= maxGifts) {
      max = sum;
    }
    nums.forEach((item, i) => {
      path.push(item);
      if (path.length <= maxCities) {
        backtrack(nums.slice(i + 1), path);
      }
      path.pop(item);
    });
  };

  backtrack(giftsCities, []);
  return max;
}

//Respuestas que pasan los test pero que hay casos que no contemplan.
//este caso lo rompe: [10, 3, 11, 10, 5]
function getMaxGifts3(giftsCities, maxGifts, maxCities) {
  const solve = (giftsCities, maxGifts, maxCities) => {
    let maxGiftsValid = 0;
    const cityLength = giftsCities.length;
    giftsCities.map(() => {
      let cityCount = 0;
      let acc = 0;

      for (let idx = 0; idx < cityLength; idx++) {
        if (cityCount === maxCities) break;
        if (acc + giftsCities[idx] <= maxGifts) {
          acc += giftsCities[idx];
          cityCount++;
        }
      }
      if (acc > maxGiftsValid) maxGiftsValid = acc;

      giftsCities.push(giftsCities[0]);
      giftsCities.shift();
    });

    return maxGiftsValid;
  };

  return solve(giftsCities, maxGifts, maxCities);
}

//esto lo rompe: [20, 3, 11, 10, 5]
function getMaxGifts4(giftsCities, maxGifts, maxCities) {
  return (() =>
    Math.max(
      ...giftsCities
        .sort((x, y) => y - x)
        .reduce((result, _, i) => {
          //checks if the index is 0, if i = 0 dont do the unshift()
          i && giftsCities.unshift(giftsCities.pop());

          i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0);
          i <= maxGifts && result.push(i);

          i - giftsCities[maxCities - 1] <= maxGifts &&
            result.push(i - giftsCities[maxCities - 1]);
          console.log(result);

          return result;
        }, []),
      0
    ))();
}

function getMaxGifts5(giftsCities, maxGifts, maxCities) {
  let matriz = Array(maxCities + 1)
    .fill()
    .map(() => Array(giftsCities.length + 1).fill(0));

  console.log(matriz);
}
