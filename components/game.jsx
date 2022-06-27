import React from "react";
import Board from "./board"
import * as Minesweeper from "../minesweeper";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(11, 13)
    }
  }

  updateGame(tile, alted) {
    if (alted) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});
  }

  restartGame(e) {
    e.preventDefault();
    this.setState({board: new Minesweeper.Board(11,13)})
  }

  render() {
    let gameOver = "";
    let gameOverMsg = "";
    let modalOpen = "";

    if (this.state.board.won()) {
      gameOver = "won";
      gameOverMsg = "you won!"
      modalOpen = "is-open";

    } else if (this.state.board.lost()) {
      gameOver = "lost"
      gameOverMsg = "you lost!"
      modalOpen = "is-open";
    }

    return (
      <div className="minesweeper">
        <h1>minesweeper</h1>
        <p>click to explore a tile</p>
        <p>alt + click to flag a tile</p>

        <div className={gameOver}>
          <Board board={this.state.board} updateGame={this.updateGame.bind(this)}/>
        </div>

        <div className={"modal " + modalOpen}>
          <section className="modal-screen"></section>
          <section className="modal-form">
            <form action="">
              <div id="game-over-msg">{gameOverMsg}</div>
              <button id="replay" onClick={this.restartGame.bind(this)}>play again!</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}