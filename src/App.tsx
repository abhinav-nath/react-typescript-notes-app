import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Note } from "./models/Note";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule a new meeting",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
