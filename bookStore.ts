const oneBook = 800;
const disc: number[] = [0, 0, 0.05, 0.1, 0.2, 0.25];

function cost(books: number[]): number {
  if (books.length == 0) {
    return 0;
  }
  books.sort();
  let sum = 0;
  let distinctBooks = books.filter((n, i) => books.indexOf(n) === i);
  if (books.length < 6) {
    sum = books.length * (1 - disc[distinctBooks.length]) * oneBook;
  } else {
    if (books.length >= 10 && books.length % 4 > 1) {
      let groups = Math.floor(books.length / 5);
      let rest = books.length % 5;
      sum += groups * 5 * (1 - disc[5]) * oneBook;
      console.log(sum, groups, rest, books.length, disc[5], disc[rest]);

      sum += rest * (1 - disc[rest]) * oneBook;
      return sum;
    } else if (distinctBooks.length >= 4) {
      let groups = Math.floor(books.length / 4);
      let rest = books.length % 4;

      sum += Math.floor(groups * 4 * (1 - disc[4]) * oneBook);
      console.log(sum, groups, rest, books.length, disc[4], disc[rest]);
      sum += rest * (1 - disc[rest]) * oneBook;
      return sum;
    } else {
      sum += distinctBooks.length * (1 - disc[distinctBooks.length]) * oneBook;
      distinctBooks = [];
    }
  }

  return sum;
}
console.log("Sum: " + cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
