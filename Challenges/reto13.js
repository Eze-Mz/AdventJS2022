function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter((change) => change[1] > lastBackup)
        .map((change) => change[0])
    ),
  ].sort((a, b) => a - b);
}

function getFilesToBackup2(lastBackup, changes) {
  return changes
    .reduce((acc, curr) => {
      return curr[1] > lastBackup && !acc.includes(curr[0])
        ? [...acc, curr[0]]
        : [...acc];
    }, [])
    .sort((a, b) => a - b);
}

//from discord
function getFilesToBackup3(lastBackup, changes) {
  const arr = [];

  changes.forEach(
    (change) => change[1] > lastBackup && (arr[change[0]] = changue[0])
  );

  return arr.filter((a) => a);
}

const lastBackup = 1546300800;
const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100],
];

console.log(getFilesToBackup3(lastBackup, changes)); // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
