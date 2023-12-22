export class Matrix {
  matrix: number[][];

  constructor(size: number) {
    this.matrix = this.createMatrix(size + 2);
  }

  createMatrix(size: number) {
    const matrix: number[][] = [];

    for (let i = 0; i < size; i++) {
      matrix[i] = [];
      for (let j = 0; j < size; j++) {
        // set edge cells to 0
        if (i === 0 || j === 0 || i === size - 1 || j === size - 1) {
          matrix[i][j] = 0;
          continue;
        }
        const randomNumber = this.getRandomNumber();
        matrix[i][j] = randomNumber;
      }
    }

    return matrix;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
  }
}
