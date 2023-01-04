import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
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
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
