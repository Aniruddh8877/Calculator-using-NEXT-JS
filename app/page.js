"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "AC") {
      setInput(""); // Clear the input
    } else if (value === "del") {
      setInput(input.slice(0, -1)); // Delete the last character
    } else if (value === "=") {
      try {
        // Evaluate the expression safely
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value); // Append the clicked value to the input
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-5 bg-[url('./various.jpg')] bg-cover">
      <h1 className="text-6xl bg-gradient-to-r from-red-250 via-black to-blue-950 bg-clip-text text-transparent">
        Calculator
      </h1>
      <div className="mt-5 h-[34rem] w-[22rem] border-4 rounded-2xl flex flex-col items-center shadow-2xl backdrop-blur-xl shadow-red-950">
        <div className="h-[30%] w-[98%] bg-white mt-1 rounded-xl flex justify-center">
          <input
            type="text"
            className="w-full h-full text-right text-5xl font-bold pr-4 overflow-x-auto rounded-t-xl"
            value={input}
            readOnly
          />
        </div>
        <div className="flex flex-col items-center h-full w-[98%] mt-4 gap-4">
          <div className="h- w-[98%] flex items-center justify-evenly gap-2">
            {[
              "AC",
              "(",
              ")",
              "/",
            ].map((btn) => (
              <button
                key={btn}
                className="h-16 w-16 rounded-full bg-gray-800 text-white text-2xl font-bold"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          {[
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "del", "="],
          ].map((row, index) => (
            <div key={index} className="h- w-[98%] flex items-center justify-evenly gap-2">
              {row.map((btn) => (
                <button
                  key={btn}
                  className="h-16 w-16 rounded-full bg-gray-800 text-white text-2xl font-bold"
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
