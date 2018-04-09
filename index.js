class TicTacToe {
  constructor() {
    this.board = new Board();
    this.player = 'X';
  }

  prompt() {
    console.log(`it is ${this.player}'s turn...\nPlease input number of chosen square`);
    let response = readline();
    handler(response)
  }

  handler(i) {
    this.board[i].value = turn;
  }

  check() {

  }
}

class Board {
  constructor() {
    this.squares = Array(9).map((e, i) => new Square(i));
  }

  draw() {

  }
}

class Square {
  constructor(i) {
    this.index = i;
    this.value = i;
  }


}
