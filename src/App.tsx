import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import Note from "./Components/Note/Note";
import { NoteType } from "./Components/Note/Types";
import MainLayout from "./Layout/MainLayout/MainLayout";
import NoteLayout from "./Layout/NoteLayout/NoteLayout";

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

  const noteComponents = notes.map((note, i) => {
    return <Note key={i} {...note} closeHandler={removeNoteById} />;
  });

  const handleAddButtonClick = () => {
    setNotes([...notes, newNote]);
    setNewNote({ title: "", content: "", id: uuidv4() });
  };

  const handleInputChange = (name: string, value: string) => {
    console.log(name);
    console.log(value);
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

  const Button = (props: {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    text: string;
  }) => {
    return (
      <div onClick={props.onClick} className={styles.button}>
        {props.text}
      </div>
    );
  };

  const TextInput = (props: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  }) => {
    return (
      <input
        className={styles.textInput}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    );
  };

  return (
    <div>
      <div
        style={{ width: "100vw", textAlign: "center", marginBottom: "3rem" }}
      >
        MY NOTETAKING APP
      </div>
      <MainLayout>
        <NoteLayout>{noteComponents}</NoteLayout>
        <div>New Title</div>
        <TextInput
          onChange={(e) => handleInputChange("title", e.currentTarget.value)}
          value={newNote.title}
        />
        <div>New Content</div>
        <TextInput
          onChange={(e) => handleInputChange("content", e.currentTarget.value)}
          value={newNote.content}
        />
        <Button onClick={() => handleAddButtonClick()} text="Add New Note" />
      </MainLayout>
    </div>
  );
}

export default App;
