function createCube(size) {
  let top = [];
  let bottom = [];

  for (let i = 0; i < size; i++) {
    top.push(" ".repeat(size - i) + "/\\".repeat(i + 1) + "_\\".repeat(size));
    bottom.push(" ".repeat(size - i) + "\\/".repeat(i + 1) + "_/".repeat(size));
  }
  return top.concat(bottom.reverse()).join("\n");
}

/*
/\_\
\/_/
*/
/*
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
*/
/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
*/
console.log(createCube(50));
