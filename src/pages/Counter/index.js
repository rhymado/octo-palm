import React from "react";

import Header from "../../components/Header";

function Counter() {
  return (
    <main className="h-screen flex flex-col select-none text-black">
      <Header />
      <div className="bg-gray-400 flex-1 flex flex-col">
        <section className="text-center font-bold text-3xl">
          <h1>Counter</h1>
        </section>
        <section className="flex flex-1">
          <section className="flex justify-center items-center flex-1 text-[20rem] border-2 border-solid border-black m-12 rounded-xl bg-accent">
            0
          </section>
          <section className="flex justify-center items-center flex-1 flex-col gap-1 text-7xl">
            <div className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2">
              &uarr;
            </div>
            <div className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2">
              &darr;
            </div>
            <div className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2">
              &#8634;
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Counter;
