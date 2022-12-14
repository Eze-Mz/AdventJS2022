function fitsInOneBox(boxes) {
  return (
    new Set(boxes.map((b) => Math.min(...Object.values(b)))).size ===
    boxes.length
  );
}

//from discord
function fitsInOneBox2(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every(
      (box, i) =>
        !i ||
        (box.l > boxes[i - 1].l &&
          box.w > boxes[i - 1].w &&
          box.h > boxes[i - 1].h)
    );
}

//from discord
function fitsInOneBox3(boxes) {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h)
    .every(
      (box, i) =>
        !i ||
        (box.l > boxes[i - 1].l &&
          box.h > boxes[i - 1].h &&
          box.w > boxes[i - 1].w)
    );
}

/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]; */

/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]; */

/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 1, w: 1, h: 1 },
]; */
/* const boxes = [
  { l: 1, w: 4, h: 4 },
  { l: 2, w: 4, h: 4 },
  { l: 3, w: 4, h: 4 },
]; */
/* const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 1, w: 2, h: 2 },
  { l: 2, w: 3, h: 3 },
]; */
const boxes = [
  { l: 4, w: 40, h: 40 },
  { l: 5, w: 60, h: 60 },
  { l: 6, w: 70, h: 70 },
  { l: 7, w: 6, h: 6 },
];
console.log(fitsInOneBox2(boxes));
