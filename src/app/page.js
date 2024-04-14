"use client"

import { useState } from "react";
// import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";

import alphabet from "./alphabet.json";

export default function Home() {
  const [letter, setLetter] = useState(alphabet[0]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <div dir="rtl" className="absolute top-10 flex flex-row items-end max-w-full overflow-x-scroll text-3xl">
        {
          alphabet.map((x) =>
            <button
              key={x.letter}
              className={classNames(
                letter.letter === x.letter ? "text-white -translate-y-5" : "text-gray-500",
                "cursor-pointer transition ease-in-out px-2.5 py-5 hover:text-white hover:-translate-y-5 duration-100"
              )}
              onClick={() => setLetter(x)}  
            >
              {x.letter}
            </button>
          )
        }
      </div>

      <div className="flex-1 flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-row flex-wrap items-center gap-10 min-w-3xl">
          <div className="flex flex-col items-center">
            <p className="w-[350px] text-[250px] text-center sm:w-[500px] sm:text-[300px]">
              {letter.letter}
            </p>
            <div className="flex gap-3">
              <p className="text-gray-500 text-3xl">
                {letter.name[0].toUpperCase() + letter.name.slice(1)}
              </p>
              {/* <button className="text-gray-500 hover:text-white">
                <SpeakerWaveIcon className="h-7 w-7" />
              </button> */}
            </div>
          </div>
          
          <div dir="rtl" className="flex flex-row justify-center w-full gap-3 sm:flex-col sm:w-auto">
            {
              Object.keys(letter.forms).map((form, formIdx) =>
                <div key={formIdx} className="text-center border border-1 border-gray-500 p-3 rounded-md">
                  <p className="text-3xl">{letter.forms[form]}</p>
                  <p className="text-gray-500">{form}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </main>
  );
}
