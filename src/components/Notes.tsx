import * as React from "react";
import { Note } from "../models/Note";

interface INotesProps {
  note: Note;
}

const Notes: React.FunctionComponent<INotesProps> = ({ note }) => {
  return <div>Note Card</div>;
};

export default Notes;
