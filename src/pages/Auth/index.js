import React from "react";

import { login } from "../../utils/https/auth";
import { save } from "../../utils/localStorage";

function Login() {
  const controller = React.useMemo(() => new AbortController(), []);
  //   const [email, setEmail] = React.useState("");
  //   const [pwd, setPwd] = React.useState("");
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const loginHandler = (e) => {
    e.preventDefault();
    login(form.email, form.password, controller)
      .then((res) => {
        // console.log(res.data);
        const key = "tokokopi-token";
        save(key, res.data.token);
      })
      .catch((err) => console.log(err));
  };
  const onChangeForm = (e) =>
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  return (
    <form className="flex flex-col gap-5">
      <label htmlFor="email">Email Address: </label>
      <input
        type="text"
        name="email"
        id="email"
        value={form.email}
        onChange={onChangeForm}
        className="p-2 text-white rounded-md bg-black"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={form.password}
        onChange={onChangeForm}
        className="p-2 text-white rounded-md bg-black"
      />
      <button className="btn" onClick={loginHandler}>
        Login
      </button>
    </form>
  );
}

function Register() {
  return (
    <form className="flex flex-col gap-5">
      <label htmlFor="email">Email Address: </label>
      <input type="text" name="email" id="email" className="p-2 text-white rounded-md bg-black" />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-2 text-white rounded-md bg-black"
      />
      <label htmlFor="phone">Phone Number: </label>
      <input type="text" name="phone" id="phone" className="p-2 text-white rounded-md bg-black" />
      <button type="button" className="btn">
        Register
      </button>
    </form>
  );
}

function Auth() {
  const [mode, setMode] = React.useState("Login");
  // const childrenComponent = () => {
  //   // if (mode === "Login") return <Login />;
  //   // return <Register />;
  //   return mode === "Login" ? <Login /> : <Register />;
  // };
  // 1. true dan false => kondisi ? if true : if false
  // 2. true => kondisi && if true
  // 3. false => kondisi || if false
  return (
    <main className="h-screen bg-gray-500 text-slate-300 flex flex-col">
      <div className="flex justify-center gap-5 py-4">
        <button className="btn" onClick={() => setMode("Login")}>
          Login
        </button>
        <button className="btn" onClick={() => setMode("Register")}>
          Register
        </button>
      </div>
      <section className="bg-gray-700 flex-1 p-8">
        {mode === "Login" ? <Login /> : <Register />}
      </section>
    </main>
  );
}

export default Auth;
