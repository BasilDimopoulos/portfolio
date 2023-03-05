import React from "react";
//@ts-ignore
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
  private heroText = React.createRef();
  private secondPage = React.createRef();

  render() {
    return (
      <div
        ref={this.tiles as React.RefObject<HTMLDivElement>}
        id="tiles"
        className="h-screen"
      >
        <div
          ref={this.heroText as React.RefObject<HTMLDivElement>}
          className="absolute z-20 md:pl-28 pl-5 md:pr-28 pr-5 w-full pointer-events-none transition"
          id="title"
        >
          <h1 className="text-white text-6xl md:text-9xl uppercase mt-56 md:max-w-6xl leading-[0.9]">
            Hello <br></br>My Name is Basil
          </h1>
          <div className="pl-1">
            <div className="w-full h-1 bg-white mt-48"></div>
            <div className="flex justify-between">
              <p className="text-white font-bold text-lg uppercase mt-6 leading-5">
                Last Updated<br></br> March 2023
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-20 h-20 text-slate-300 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* second page */}
        <div
          ref={this.secondPage as React.RefObject<HTMLDivElement>}
          className="hidden absolute"
        >
          <div className="p-24">
            <h2 className="text-white text-7xl uppercase max-w-4xl">
              But maybe you confused me with
            </h2>
            <div className="flex mt-14 space-x-16">
              <div className="max-w-[400px]">
                <img src="/images/image-8.jpg" className="w-[400px]"></img>
                <p className="text-white uppercase text-xl font-bold mt-3">
                  Basil Brush
                </p>
                
                <p className="text-gray-200 text-xl">
                  Basil Brush is a fictional red fox, best known for his
                  appearances on daytime British television.
                </p>
              </div>

              <div className="max-w-[400px]">
                <img src="/images/image-9.jpg" className="w-[400px]"></img>
                <p className="text-white uppercase text-xl font-bold mt-3">
                  Basil Fawlty
                </p>
                <p className="text-gray-200 text-xl">
                  Basil Fawlty is the main character of the 1970s British sitcom
                  Fawlty Towers, played by John Cleese.
                </p>
              </div>

              <div className="max-w-[400px]">
                <img src="/images/image-10.jpg" className="w-[400px]"></img>
                <p className="text-white uppercase text-xl font-bold mt-3">
                  Basil
                </p>
                <p className="text-gray-200 text-xl">
                  Basil. It is a tender plant, and is used in cuisines
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleOnClick = (index: any) => {
    count = count + 1;
    toggled = true;
    //@ts-ignore
    this.heroText.current.style.opacity = "0";
    //@ts-ignore
    this.secondPage.current.style.display = "block";
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
