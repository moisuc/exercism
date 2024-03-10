class Matrix {
  matrixArray: number[][];
  columnsArray: number[][];
  constructor(matrixString: string) {
    this.matrixArray = [];
    [this.matrixArray, this.columnsArray] = this.parseString(matrixString);
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    return this.columnsArray;
  }

  parseString(matrixString: string) {
    let rows: number[][] = [];
    let columns: number[][] = [];
    let rowsArray = matrixString.split("\n");
    for (let i = 0; i < rowsArray.length; i++) {
      rows[i] = rowsArray[i].split(" ").map(Number);
    }
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        if (i === 0) {
          columns[j] = [];
        }
        columns[j].push(rows[i][j]);
      }
    }

    return [rows, columns];
  }
}
