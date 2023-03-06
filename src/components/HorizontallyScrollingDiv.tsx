import React, { Ref } from "react";
import { useEffect, useRef } from "react";

export default function HorizontallyScrollingDiv() {
  let scrollContainer: Ref<HTMLDivElement> = React.createRef();
  useEffect(() => {
    //@ts-ignore
    scrollContainer.current.addEventListener("wheel", (evt: any) => {
      evt.preventDefault();
    //@ts-ignore
      scrollContainer.current.scrollLeft += evt.deltaY/2;
    });
  });
  return (
    <div
      ref={scrollContainer as React.RefObject<HTMLDivElement>}
      className="flex mt-14 space-x-16 overflow-x-auto pl-24 z-30 pr-24 shrink hideScrollBar"
    >
      <div className="w-[400px] shrink-0">
        <img src="/images/image-8.jpg" className="w-[400px]"></img>
        <p className="text-white uppercase text-xl font-bold mt-3">
          Basil Brush
        </p>

        <p className="text-gray-200 text-xl">
          Basil Brush is a fictional red fox, best known for his appearances on
          daytime British television.
        </p>
      </div>

      <div className="w-[400px] shrink-0">
        <img src="/images/image-9.jpg" className="w-[400px]"></img>
        <p className="text-white uppercase text-xl font-bold mt-3">
          Basil Fawlty
        </p>
        <p className="text-gray-200 text-xl ">
          Basil Fawlty is the main character of the 1970s British sitcom Fawlty
          Towers, played by John Cleese.
        </p>
      </div>

      <div className="w-[400px] shrink-0">
        <img src="/images/image-10.jpg" className="w-[400px]"></img>
        <p className="text-white uppercase text-xl font-bold mt-3">Basil</p>
        <p className="text-gray-200 text-xl">
          Basil. It is a tender plant, and is used in cuisines worldwide.
        </p>
      </div>

      <div className="w-[400px] shrink-0">
        <img src="/images/image-11.jpg" className="w-[400px]"></img>
        <p className="text-white uppercase text-xl font-bold mt-3">
          Basil (The Name of The Wind)
        </p>
        <p className="text-gray-200 text-xl ">
          Basil is one of Kvothe&#39;s classmates at University. He is often working
          Stocks at the Fishery as punishment for minor transgressions.
        </p>
      </div>

      <div className="w-[400px] shrink-0">
        <img src="/images/image-12.jpg" className="w-[400px]"></img>
        <p className="text-white uppercase text-xl font-bold mt-3">
          Basil Hallward
        </p>
        <p className="text-gray-200 text-xl">
          Basil Hallward is a talented, though somewhat conventionally minded,
          painter. His love for Dorian Gray changes the way he sees art
        </p>
      </div>
    </div>
  );
}
