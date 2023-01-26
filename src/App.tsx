import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Components/Button";
import Note from "./Components/Note";
import { NoteType } from "./Components/Note/Types";
import TextInput from "./Components/TextInput";
import MainLayout from "./Layout/MainLayout";
import NoteLayout from "./Layout/NoteLayout";

function App() {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const [newNote, setNewNote] = useState<NoteType>({
    title: "",
    content: "",
    id: uuidv4(),
  });

  const removeNoteById = (id: string) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  };

  const noteComponents = notes.map((note) => {
    return <Note key={note.id} {...note} closeHandler={removeNoteById} />;
  });

  const handleAddButtonClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setNotes([...notes, newNote]);
    setNewNote({ title: "", content: "", id: uuidv4() });
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "title") {
      setNewNote((prev) => {
        return { ...prev, title: value };
      });
    } else if (name === "content") {
      setNewNote((prev) => {
        return { ...prev, content: value };
      });
    }
  };

  return (
    <MainLayout>
      <NoteLayout>{noteComponents}</NoteLayout>
      <div>New Title</div>
      <TextInput
        onChange={handleInputChange}
        name="title"
        value={newNote.title}
      />
      <div>New Content</div>
      <TextInput
        onChange={handleInputChange}
        name="content"
        value={newNote.content}
      />
      <Button onClick={handleAddButtonClick} text="Add New Note" />
    </MainLayout>
  );
}

export default App;
