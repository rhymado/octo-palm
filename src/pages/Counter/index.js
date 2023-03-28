import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
// import { getUsers } from "../../utils/https/placeholder";
import { counterAction } from "../../redux/slices/counter";
import { usersAction } from "../../redux/slices/users";

function Counter({ title }) {
  // call hooks here
  // const [state, setState] = useState(//inisialisasi);
  // const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  // console.log(calculator);
  const controller = useMemo(() => new AbortController(), []);
  const toggleTheme = () => {
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  };
  const addCounter = () => {
    // const newCounter = counter + 1;
    // setCounter(newCounter);
    dispatch(counterAction.increment());
  };
  const subCounter = () => {
    // if (counter === 0) return;
    // const newCounter = counter - 1;
    // setCounter(newCounter);
    if (calculator.number === 0) return;
    dispatch(counterAction.decrement());
  };
  const resetCounter = () => {
    // if (counter === 0) return;
    // setCounter(0);
    if (calculator.number === 0) return;
    dispatch(counterAction.reset());
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
    // getUsers(
    //   controller,
    //   (res) => {
    //     console.log(res.data);
    //   },
    //   (err) => {
    //     console.log(err.message);
    //   }
    // );
    dispatch(usersAction.getUsersThunk(controller));

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
          <h1>{calculator.name || title}</h1>
        </section>
        <section className="flex flex-1">
          <section className="flex justify-center items-center flex-1 text-[20rem] border-2 border-solid border-black m-12 rounded-xl bg-accent">
            {calculator.number}
          </section>
          <section className="flex justify-center items-center flex-1 flex-col gap-1 text-7xl">
            <form
              className="p-6 flex-1 text-white"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(counterAction.submit(e.target.name.value));
              }}
            >
              <input type="text" name="name" className="w-full p-4 rounded-md text-base" />
              <button className="btn w-full text-base">submit</button>
            </form>
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
