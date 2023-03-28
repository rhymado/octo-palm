import React from "react";

import { themeContext } from "../../contexts/theme";

function Card({ title, content }) {
  const { theme } = React.useContext(themeContext);
  return (
    <div
      className={`border-2 border-solid ${
        theme === "light" ? "border-black" : "border-white"
      } p-4 h-40 w-60`}
    >
      <p>{title}</p>
      <hr />
      <p>{content}</p>
    </div>
  );
}

function NoteList({ notes }) {
  const { theme } = React.useContext(themeContext);
  return (
    <div
      className={`flex-1 ${
        theme === "light" ? "bg-slate-500" : "bg-slate-600"
      }  p-8 flex flex-wrap gap-4`}
    >
      {notes.map((note, idx) => (
        <Card title={note.title} content={note.content} key={idx} />
      ))}
    </div>
  );
}

export default NoteList;
