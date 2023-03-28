import React from "react";

function Card({ title, content }) {
  return (
    <div className="border-2 border-solid border-black p-4 h-40 w-60">
      <p>{title}</p>
      <hr />
      <p>{content}</p>
    </div>
  );
}

function NoteList({ notes }) {
  return (
    <div className="flex-1 bg-slate-600 p-8 flex flex-wrap gap-4">
      {notes.map((note, idx) => (
        <Card title={note.title} content={note.content} key={idx} />
      ))}
    </div>
  );
}

export default NoteList;
