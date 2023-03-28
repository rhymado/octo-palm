import React from "react";

import { themeContext } from "../../contexts/theme";

function NotesControl({ toggleModal }) {
  const themeObj = React.useContext(themeContext);
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
      <button className="btn normal-case" onClick={themeObj.toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default NotesControl;
