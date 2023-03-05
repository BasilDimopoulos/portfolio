import React from "react";
import anime from "animejs";
import { LandingText } from "./LandingText";

const colors = ["rgb(229, 57, 53)", "rgb(253,216,53)", "rgb(244,81,30"];

let count = -1;
let toggled = false;

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
      >
        <LandingText />
        
      </div>
    );
  }

  handleOnClick = (index: any) => {
    count = count + 1;
    toggled = true;
    document.body.classList.toggle("toggled");
    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [this.columns, this.rows],
        from: index,
      }),
    });
  };

  componentDidMount() {
    this.wrapper = this.tiles;
    this.createGrid();
    window.addEventListener("resize", this.createGrid);
  }

  createTile = (index: any) => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = (e) => this.handleOnClick(index);
    return tile;
  };

  createTiles = (quantity: any) => {
    Array.from(Array(quantity)).map((tile, index) => {
      this.wrapper.current.appendChild(this.createTile(index));
    });
  };

  createGrid = () => {
    const size = document.body.clientWidth > 800 ? 100 : 50;
    this.columns = Math.floor(document.body.clientWidth / size);
    this.rows = Math.floor(document.body.clientHeight / size);
    this.wrapper.current.style.setProperty("--columns", this.columns);
    this.wrapper.current.style.setProperty("--rows", this.rows);
    console.log(this.columns);
    console.log(this.rows);
    this.createTiles(this.columns * this.rows);
  };
}
