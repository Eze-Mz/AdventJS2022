function checkPart(part) {
  //no hace falta checkear el primer caso xq el palíndromo más chico es de 3 letras y si le saco uno seguiría siendo palíndromo
  return [...part].some((_, i) => {
    let p = part.slice(0, i) + part.slice(i + 1);
    return p === [...p].reverse().join("");
  });
}

//Esta solución no considera este caso: checkPart("aexha")
function checkPart2(part) {
  let arr = [...part].slice(1);
  let rev = [...part].reverse();
  let x = arr.join("") == arr.reverse().join("");
  let y = [...part].reduce((x, y, i) => {
    console.log(y);
    console.log(rev[i]);
    return x + (rev[i] != y);
  }, 0);
  return x || y <= 2;
}
//from discord
function checkPart3(part) {
  return (
    part.split("").reverse().join("") === part ||
    part.split("").some((piece, i, arr) => {
      arr[i] = "";
      const turned = [...arr].reverse().join("");
      if (arr.join("") === turned) return true;
      arr[i] = piece;
    })
  );
}

console.log(checkPart("abcba")); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart("miidim")); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu")); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
