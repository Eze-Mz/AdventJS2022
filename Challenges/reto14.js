//Things to notice, when they branch the two left and rigth node share one lower node, like this:
/*
    0
   / \
  7   4
 / \ / \
2   4   6
*/
//Instead of this other type of tree (at least I think so):
/*
      0
   /     \
  7       4
 / \     / \
2   4   6   5
*/
//the last one is a BINARY TREE
//In conclusion: THE LENGTH OF THE LAST GROUP OF NODES IS THE SAME AS THE DEPTH OF THE TREE. For example:
//[[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]
// The first array length is 4 (the depth of the tree)
// The length of the last inner array is also 4, that's because two nodes are shared by the previous nodes.

//(dinamic approach)
function getOptimalPath(path) {
  const sumPaths = new Array(path.length);
  for (let i = 0; i < path.length; i++) {
    sumPaths[i] = new Array(i).fill(0);
  }
  sumPaths.forEach(
    (_, i) => (sumPaths[path.length - 1][i] = path[path.length - 1][i])
  );
  for (let i = path.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      sumPaths[i][j] =
        path[i][j] + Math.min(sumPaths[i + 1][j], sumPaths[i + 1][j + 1]);
    }
  }
  return sumPaths[0][0];
}

//from discord (recursion)
function getOptimalPath2(path) {
  const rec = (sum, i, j) => {
    if (path.length == i + 1) {
      sumPaths.push(sum);
      return;
    }
    rec(sum + path[i + 1][j], i + 1, j);
    rec(sum + path[i + 1][j + 1], i + 1, j + 1);
  };
  let sumPaths = [];
  rec(path[0][0], 0, 0);
  return Math.min(...sumPaths);
}
//from discord
function getOptimalPath3(path) {
  return path.reduceRight((acc, curr) => {
    return curr.map((node, i) => Math.min(node + acc[i], node + acc[i + 1]));
  });
}

//getOptimalPath([[0], [2, 3]]); // 2
// 0 -> 2

console.log(getOptimalPath3([[0], [3, 4], [9, 8, 1]])); // 5
// 0 -> 4 -> 1

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // 8
// 1 -> 1 -> 5 -> 1
