import React from "react";

import Header from "../../components/Header";
import Card from "./Card";

const productFromAPI = [
  {
    name: "A",
    price: 0,
  },
  {
    name: "B",
    price: 1,
  },
  {
    name: "C",
    price: 2,
  },
  {
    name: "D",
    price: 3,
  },
  {
    name: "E",
    price: 4,
  },
];

function Cashier() {
  return (
    <>
      <Header />
      <main className="flex bg-lime-100">
        <section className="w-3/5 border-2 border-black border-solid p-4 flex flex-wrap gap-[5%]">
          {productFromAPI.map((item, idx) => {
            return <Card name={item.name} price={item.price} key={idx} />;
          })}
        </section>
        <section className="w-2/5 border-2 border-black border-solid p-4"></section>
      </main>
    </>
  );
}

export default Cashier;
