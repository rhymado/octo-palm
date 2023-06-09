import React from "react";

import Header from "../../components/Header";
import NotesControl from "./NotesControl";
import NoteList from "./NoteList";
import Modal from "../../components/Modal";

import { themeContext } from "../../contexts/theme";

function Notes() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [notes, setNotes] = React.useState([
    {
      title: "TO DO",
      content: "1. Bangun 2. Mandi 3.Tidur",
    },
    {
      title: "IMPORTANT",
      content: "UAS 04/04 Calculus",
    },
  ]);
  const toggleModal = () => {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  };
  const onModalSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: e.target.title.value,
      content: e.target.content.value,
    };
    setNotes((notes) => {
      const newNotes = [...notes];
      newNotes.push(newNote);
      return newNotes;
    });
    e.target.title.value = "";
    e.target.content.value = "";
    toggleModal();
  };
  const { theme } = React.useContext(themeContext);
  return (
    <>
      <Header />
      <main
        className={`bg-slate-700 ${
          theme === "light" ? "text-black" : "text-white"
        } content-with-header flex flex-col`}
      >
        <NotesControl toggleModal={toggleModal} />
        <NoteList notes={notes} />
      </main>
      <Modal isOpen={isOpen} onSubmit={onModalSubmit} onClose={toggleModal} />
    </>
  );
}

export default Notes;
