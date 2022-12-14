function wrapping(gifts) {
  return gifts.map((word) => {
    let asterics = word.replaceAll(/\w/g, "*") + "**";

    return `${asterics}\n*${word}*\n${asterics}`;
  });
}

function wrapping2(gifts) {
  return gifts.map((gift) => {
    const a = "*".repeat(gift.length + 2);
    return [a, "*" + gift + "*", a].join("\n");
  });
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping2(gifts);
console.log(wrapped);
