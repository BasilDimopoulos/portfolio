import React from "react";
//@ts-ignore
import anime from "animejs";
import HorizontallyScrollingDiv from "./HorizontallyScrollingDiv";
import BasilFeature from "./BasilFeature";

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
  private size = 50;

  render() {
    return (
      <div
        ref={this.tiles as React.RefObject<HTMLDivElement>}
        id="tiles"
        className="h-screen"
      >
        <div
          ref={this.heroText as React.RefObject<HTMLDivElement>}
          className="absolute z-20 w-full h-screen transition flex flex-col justify-center md:items-center"
          id="title"
        >
          <div className="bg-black md:px-40 flex flex-col md:items-center justify-center md:pt-24 pt-16 pb-24 rounded pl-10 mx-4 md:mx-0">
            <h1 className="text-white text-7xl md:text-[150px] uppercase md:max-w-6xl leading-[0.9] font-gilroy font-black">
              Basil?
            </h1>
            <p className="text-white mt-5 mb-8 font-gilroy text-2xl md:text-3xl md:text-[1.7rem] font-medium md:max-w-2xl max-w-lg md:text-center">
              Are you here for Basil? Well of course you are! Look at the URL
              for goodness sake!
            </p>
            <button
              onClick={() =>
                this.handleOnClick(
                  (Math.floor(document.body.clientWidth / this.size) *
                    document.body.clientHeight) /
                    this.size /
                    2
                )
              }
              className="text-white w-64 uppercase text-xl font-bold py-3 px-4 rounded font-gilroy bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 background-animate transition ease-in-out delay-150 hover:scale-110"
            >
              Take the journey
            </button>
          </div>
        </div>

        {/* second page */}
        <div
          ref={this.secondPage as React.RefObject<HTMLDivElement>}
          className="hidden absolute"
        >
          <div className="w-screen h-screen bg-[#1B1C2C] flex flex-col justify-center items-center">
            <div className="flex space-x-20 container justify-center items-center">
              <div className="max-w-3xl">
                <h2 className="text-white font-gilroy font-black text-8xl uppercase">
                  Who is this person Basil?
                </h2>
                <p className="text-white font-gilroy font-medium text-2xl max-w-2xl mt-5">
                  Some description about this mysterious person called person
                  called Basil goes on, and on, and on here. Some description
                  about this mysterious person called person called Basil goes
                  on, and on, and on here.{" "}
                </p>
              </div>
              <div>
                <BasilFeature />
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
    setTimeout(() => {
      //@ts-ignore
      this.secondPage.current.style.zIndex = "50";
    }, 1300);

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
    this.columns = Math.floor(document.body.clientWidth / this.size);
    this.rows = Math.floor(document.body.clientHeight / this.size);
    this.wrapper.current.style.setProperty("--columns", this.columns);
    this.wrapper.current.style.setProperty("--rows", this.rows);
    console.log(this.columns);
    console.log(this.rows);
    this.createTiles(this.columns * this.rows);
  };
}
