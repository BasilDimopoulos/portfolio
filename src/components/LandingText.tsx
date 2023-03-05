import React from "react";

export class LandingText extends React.Component {
  render() {
    return (
      <div className="absolute z-20 pl-28 pr-28 w-full pointer-events-none transition">
        <h1 className="text-white text-9xl uppercase mt-56 max-w-6xl leading-[0.9]">
          Hello <br></br>My Name is Basil
        </h1>
        <div className="pl-1">
          <div className="w-full h-1 bg-white mt-48"></div>
          <div className="flex justify-between">
            <p className="text-white font-bold text-lg uppercase mt-6 leading-5">
              Last Updated<br></br> May 2023
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
    );
  }
}
