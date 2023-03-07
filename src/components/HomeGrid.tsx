import React from "react";
//@ts-ignore
import anime from "animejs";
import HorizontallyScrollingDiv from "./HorizontallyScrollingDiv";

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
            <button onClick={()=> this.handleOnClick(Math.floor(((document.body.clientWidth / this.size))) * document.body.clientHeight/this.size / 2) } className="text-white w-64 uppercase text-xl bg-blue-500 hover:bg-blue-700 font-bold py-3 px-4 rounded font-gilroy bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 background-animate transition ease-in-out delay-150 hover:scale-110">Take the journey</button>
          </div>
        </div>

        {/* second page */}
        <div
          ref={this.secondPage as React.RefObject<HTMLDivElement>}
          className="hidden absolute"
        >
          <div className="w-screen">
            <h2 className="text-white text-4xl text-[32px] md:text-7xl uppercase md:max-w-5xl md:pl-24 md:pt-24 pl-5 pt-12 font-gilroy font-black">
              But maybe you confused me with
            </h2>
            <HorizontallyScrollingDiv />
            <div className="md:pl-24 md:pb-24 pl-5 pr-10">
              <h3 className="text-white uppercase text-2xl text-[32px] md:text-5xl max-w-4xl tracking-widest md:mt-20 mt-12 font-gilroy font-black">
                In reality I am just a humble engineer
              </h3>
              <p className="text-gray-200 md:text-xl text-lg md:mt-3 mt-1">
                Here are some links for you to get to know me better
              </p>
              <div className="flex pt-3">
                <svg
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/in/basil-dimopoulos-6508351b0/`,
                      "_blank"
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 fill-white cursor-pointer"
                  viewBox="0 5 1036 990"
                >
                  <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
                </svg>
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
