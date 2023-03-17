import React from "react";

function Card({ name, price }) {
  return (
    <div className="border-2 border-solid border-black min-w-[30%] p-4 bg-slate-200 font-mono text-black cursor-pointer select-none hover:bg-slate-100">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-lg text-gray-500">{price}</p>
    </div>
  );
}

export default Card;
