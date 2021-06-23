import React from "react";

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleClick(e) {
    this.props.updateGame(this.props.tile, e.altKey);
  }

  render() {
    const tile = this.props.tile;
    const numBombs = tile.adjacentBombCount();
    let renderedTile = "";
    let tileType = "";

    if (tile.explored) {
      tileType = "revealed";
      if (tile.bombed) {
        tileType = "bombed";
        renderedTile = "\u2622";
      } else if (numBombs) {
        renderedTile = numBombs;
      }
    } else if (tile.flagged) {
      tileType = "flagged"
      renderedTile = "\u2691";
    }

    return (
      <div className={"tile " + tileType} onClick={this.handleClick.bind(this)}>{renderedTile}</div>
    );
  }
}