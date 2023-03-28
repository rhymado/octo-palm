import React from "react";

function NotesControl({ toggleModal }) {
  return (
    <div className="h-30 p-8 flex justify-center items-center gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search Note Title..."
        className="h-12 px-4 w-80"
      />
      <button className="btn normal-case" onClick={toggleModal}>
        + | New Note
      </button>
    </div>
  );
}

export default NotesControl;
