class TicTacToe {
  constructor() {
    this.board = new Board();
    this.player = 'X';
    this.board.draw();
    this.prompt();
  }

  prompt() {
    console.log(`it is ${this.player}'s turn...\nPlease input number of chosen square`);
    let response = readline();
    this.handler(response);
  }

  handler(i, turn) {
    this.board.chosen(i, turn);
    this.check();
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  check() {
    if ((this.board.squares[0].value === this.board.squares[1].value && this.board.squares[1].value === this.board.squares[2].value) ||
      (this.board.squares[3].value === this.board.squares[4].value && this.board.squares[4].value === this.board.squares[5].value) ||
      (this.board.squares[6].value === this.board.squares[7].value && this.board.squares[7].value === this.board.squares[8].value) ||
      (this.board.squares[0].value === this.board.squares[3].value && this.board.squares[3].value === this.board.squares[6].value) ||
      (this.board.squares[1].value === this.board.squares[4].value && this.board.squares[4].value === this.board.squares[7].value) ||
      (this.board.squares[2].value === this.board.squares[5].value && this.board.squares[5].value === this.board.squares[8].value) ||
      (this.board.squares[0].value === this.board.squares[4].value && this.board.squares[4].value === this.board.squares[8].value) ||
      (this.board.squares[2].value === this.board.squares[4].value && this.board.squares[4].value === this.board.squares[6].value)) {
        console.log(`Player ${this.turn} has won!`);
    } else {
      this.board.draw();
      this.prompt();
    }
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
  this.value = i;
}
