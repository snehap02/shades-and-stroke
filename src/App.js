import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-[#080919] w-full h-[200vh] flex flex-col">
        {/* navbar */}
        <div className="p-4 lg:pl-16 fixed">
          <img src="../images/icon.png" className="w-10 lg:w-14" />
        </div>

        {/* Heading */}
        <div className="flex justify-center items-center pt-20">
          <h1 className="text-amber-400 font-inter text-3xl sm:text-5xl lg:text-[70px] font-semibold tracking-wider">
            Shades and Stroke
          </h1>
        </div>

        {/* Hero section */}
        <div className="grid grid-cols-1 px-10">
          <div className="flex justify-center items-center text-center">
            <h1 className="text-neutral-500 font-robotoMono pt-10">
              A VS Code Dark theme based on one dark pro with shades and strokes
              of beautiful colors for better coding.
            </h1>
          </div>
          <div className="bg-white mt-20 md:mt-0 h-full">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
