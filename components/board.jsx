import React from "react";
import Tile from "./tile"

export default function Board(props) {
  const tiles = props.board.grid.map((row, i) => {
    return row.map((tile, j) => {
      return (<Tile key={i + "-" + j} tile={tile} updateGame={props.updateGame}/>);
    })
  });

  return (
    <ul id="board">
      {tiles}
    </ul>
  );
}