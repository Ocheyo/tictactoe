class TicTacToe {
  constructor() {
    this.board = new Board();
    this.player = 'X';
  }

  prompt() {
    console.log(`it is ${this.player}'s turn...\nPlease input number of chosen square`);
    let response = readline();
    this.handler(response);
  }

  handler(i, turn) {
    this.board.chosen(i, turn);
    this.check();
  }

  check() {
    //check
    this.board.draw();
    this.prompt();
  }
}

class Board {
  constructor() {
    this.squares = Array(9).map((e, i) => new Square(i));
  }

  chosen(i) {
    this.squares[i].value = turn;
  }

  draw() {
    console.log(`${this.squares.slice(0, 3).join(' ')}\n${this.squares.slice(3, 6).join(' ')}\n${this.squares.slice(6).join(' ')}`);
  }
}

const Square = function(i) {
  constructor(i) {
    this.value = i;
  }
}
