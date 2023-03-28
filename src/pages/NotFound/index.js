import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen text-center font-bold text-6xl bg-gray-500 text-black flex justify-center items-center select-none flex-col gap-4 px-4">
      <p>Page Not Found</p>
      <button className="btn w-[75%]" onClick={() => navigate("/")}>
        Back To Home
      </button>
    </div>
  );
}

export default NotFound;
