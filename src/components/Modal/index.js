import React from "react";

function Modal({ isOpen, onSubmit, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[1] bg-black/80 flex justify-center items-center select-none ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <section
        className="bg-slate-300 opacity-100 text-black p-4 rounded w-2/3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <h1 className="text-center">New Notes</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Notes Title"
            className="bg-slate-200 p-1 border-black border-2 rounded"
          />
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            placeholder="Put Content Here...."
            className="bg-slate-200 p-1 border-black border-2 rounded"
          ></textarea>
          <button className="btn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Modal;
