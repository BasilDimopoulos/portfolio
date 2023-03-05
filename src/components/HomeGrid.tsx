import React from "react";
import anime from 'animejs';

const colors = [
    "rgb(229, 57, 53)",
    "rgb(253,216,53)",
    "rgb(244,81,30"
];

let count = -1;

export default class HomeGrid extends React.Component {
  private tiles = React.createRef();
  private columns: any;
  private rows: any;
  private wrapper: any;

  render() {
    return (
      <div
        ref={this.tiles as React.RefObject<HTMLDivElement>}
        id="tiles"
        className="h-screen"
      ></div>
    );
  }

  handleOnClick = (index: any) => {
    count = count + 1;
    anime({
        targets: ".tile",
        backgroundColor: colors[count % (colors.length - 1)],
        delay: anime.stagger(50, {
            grid: [this.columns, this.rows],
            from: index
        })
    })
  }

  componentDidMount() {
    this.wrapper = this.tiles;
    this.createGrid();
    window.addEventListener("resize", this.createGrid);
  }

  createTile = (index: any) => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = e => this.handleOnClick(index);
    return tile;
  };

  createTiles = (quantity: any) => {
    Array.from(Array(quantity)).map((tile, index) => {
      this.wrapper.current.appendChild(this.createTile(index));
    });
  };

  createGrid = () => {
    // this.wrapper.current.innerHTML = "";
    this.columns = Math.floor(document.body.clientWidth / 50);
    this.rows = Math.floor(document.body.clientHeight / 50);
    this.wrapper.current.style.setProperty("--columns", this.columns);
    this.wrapper.current.style.setProperty("--rows", this.rows);
    console.log(this.columns);
    console.log(this.rows);
    this.createTiles(this.columns * this.rows);
  };
}
