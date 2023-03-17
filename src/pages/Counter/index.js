import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { getUsers } from "../../utils/https/placeholder";

function Counter({ title }) {
  // call hooks here
  // const [state, setState] = useState(//inisialisasi);
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  };
  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    if (counter === 0) return;
    const newCounter = counter - 1;
    setCounter(newCounter);
  };
  const resetCounter = () => {
    if (counter === 0) return;
    setCounter(0);
  };

  /**
   * useEffect(func, deps?)
   * func: () => {
   *
   *    return => digunakan untuk componentWillUnmount / Cleanup
   * }
   * deps?: []
   * 1. jika tidak diberikan, maka effect akan trigger setiap rerender (mirip cdu untuk semua)
   * 2. jika [], maka effect akan di trigger setelah mounting (mirip cdm)
   * 3. jika [...], maka effect akan di trigger ketika salah satu variabel di dalam deps berubah (cdu dengan kondisi)
   */
  useEffect(() => {
    const controller = new AbortController();
    getUsers(
      controller,
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err.message);
      }
    );

    return () => {
      controller.abort();
    };
  }, [theme]);

  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col select-none text-black">
      <Header />
      <div className="bg-gray-400 flex-1 flex flex-col">
        <section className="text-center font-bold text-3xl">
          <h1>{title}</h1>
        </section>
        <section className="flex flex-1">
          <section className="flex justify-center items-center flex-1 text-[20rem] border-2 border-solid border-black m-12 rounded-xl bg-accent">
            {counter}
          </section>
          <section className="flex justify-center items-center flex-1 flex-col gap-1 text-7xl">
            <button
              className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2 h-1/5 text-6xl"
              onClick={addCounter}
            >
              &uarr;
            </button>
            <button
              className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2 h-1/5 text-6xl"
              onClick={subCounter}
            >
              &darr;
            </button>
            <button
              className="cursor-pointer border-2 border-solid border-black bg-amber-100 rounded-xl text-center w-[30%] active:bg-amber-50 p-2 h-1/5 text-6xl"
              onClick={resetCounter}
            >
              &#8634;
            </button>
          </section>
        </section>
        <section className="flex justify-center items-center gap-5 p-2">
          <button className="btn flex-1" onClick={toggleTheme}>
            Toggle Theme
          </button>
          <button className="btn flex-1" onClick={() => navigate("/")}>
            Go Home
          </button>
        </section>
      </div>
    </main>
  );
}

export default Counter;
