import NoteContext from "./NoteContext";
import Records from '../records.json'
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = Records;
  const [notes, setNotes] = useState(notesInitial);

//   Add a Note 
  const addNote = (title,description,urlToImage,url)=>{
    note = {
        "title": "ONLINE : Free Meditation course - Jaipur Added",
    "description": "Looking for peace, balance, joy, overcome stress, transform and meet other seekers? Welcome to free guided 'Sahaja Yoga' online meditation classefafdfs that help you achieve meditation benefits in quick and easy steps and discover its healing power. No prior experience needed. These classes are designed to provide experience of an in-person interactive session.",  
    "url": "https://www.eventbrite.com/e/online-free-meditation-course-jaipur-experience-the-peace-balance-tickets-196900082447?aff=ebdssbcitybrowse",
    "urlToImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F172483359%2F250110139773%2F1%2Foriginal.20210826-144848?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C12%2C1200%2C600&s=da909f39527410a2a3679a268500bdfe",
    }
    setNotes(notes.push(note));
  }

  return (
    <NoteContext.Provider value={{ notes, addNote}}>
      {props.children};
    </NoteContext.Provider>
  );
};

export default NoteState;
