import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <div className="bg-[#321f50] w-full flex flex-col">
          {/* navbar */}
          <div className="p-4 lg:pl-16 fixed">
            <img src="../images/icon.png" className="w-12 lg:w-24"/>
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-center items-center pt-20">
            <h1 className="text-amber-400 font-inter text-3xl sm:text-5xl lg:text-[70px] font-semibold tracking-wider">
              Shades and Stroke
            </h1>
            <div className="mt-8 bg-[#23113f] px-10 py-6 rounded-xl shadow-lg shadow-black cursor-pointer transition duration-700 hover:scale-110">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=SnehaPurkayastha.shades-and-stroke"
                target="_blank"
              >
                <img src="../images/vscode.png" className="md:w-28 w-16" />
              </a>
            </div>
          </div>

          {/* Hero section */}
          <div className="px-3 sm:px-10 md:px-20 lg:px-32 xl:px-52">
            <div className="grid grid-cols-1 px-8">
              <div className="flex justify-center items-center text-center">
                <h1 className="text-neutral-300 font-robotoMono pt-10 tracking-widest lg:mt-7">
                  A VS Code Dark theme based on one dark pro with shades and
                  strokes of beautiful colors for better coding.
                </h1>
              </div>
            </div>
            <div className="h-[2px] mt-10 w-full bg-[#351962]"></div>
            <div className="bg-[#200b41] flex overflow-x-auto scrollbar-thin scrollbar-track-[#351962] gap-2">
              <img src="../images/vs1.jpeg"/>
              <img src="../images/vs2.jpeg"/>
              <img src="../images/vs3.jpeg"/>
            </div>
            <div className="mt-20 flex flex-col justify-center items-center bg-[#23113f] py-10 shadow-lg shadow-neutral-900 md:mx-10 lg:mx-20 xl:mx-36 lg:py-14 mb-20">
              <div>
                <h1 className="font-montserrat text-xl lg:text-4xl tracking-widest text-amber-300 font-extrabold">
                  Color Palette
                </h1>
              </div>
              <div className="grid grid-cols-4 gap-10 sm:gap-20 mt-10">
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#757575] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#e06c75] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#c678dd] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#d19a66] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#e5c07b] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#61afef] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#98c379] rotate-45"></div>
                <div className="w-10 h-10 lg:w-14 rounded-xl lg:h-14 bg-[#56b6c2] rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#23113f] border-t-4 border-[#120627] h-16 flex justify-center items-center">
          <h1 className="text-amber-300 text-xl font-poppins font-medium uppercase tracking-widest">Made with love by Sneha</h1>
        </footer>
      </div>
    </>
  );
}

export default App;
