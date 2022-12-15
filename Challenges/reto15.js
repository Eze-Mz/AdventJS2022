function decorateTree(base) {
  const deco = ["R", "P", "B"];
  let tree = [base];

  const generateTree = (branch) => {
    if (branch.length === 1) return branch[0];
    let level = "";
    for (let i = 0; i < branch.length - 1; i++) {
      branch[i] === branch[i + 1]
        ? (level += branch[i])
        : (level += deco.filter(
            (e) => e !== branch[i] && e !== branch[i + 1]
          )[0]);
    }
    tree.unshift([...level].join(" "));
    generateTree([...level]);
  };
  generateTree(base.split(" "));
  return tree;
}

function decorateTree2(base) {
  const arrBase = base.split(" ");
  const deco = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    BR: "P",
    RB: "P",
    PR: "B",
    RP: "B",
  };

  const treeFromBase = [];
  arrBase.slice(0, -1).reduce((tree) => {
    tree = tree.slice(1).map((_, i) => {
      return deco[tree[i] + tree[i + 1]];
    });
    treeFromBase.unshift(tree.join(" "));
    return tree;
  }, arrBase);

  return [...treeFromBase, base];
}

/* 
Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
si abajo tienes dos veces la misma letra, arriba será la misma letra. 
*/

console.log(decorateTree2("B P R P"));
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

//decorateTree("B B"); // ['B', 'B B']
