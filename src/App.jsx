import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState,useEffect } from "react";
import "./App.css";
const App = () => {

  const [addItem, setAddItem] = useState([]);
  const [c, setc] = useState(0);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };



const totalnote=()=>{
    setc(c+1)
return c;
    }


  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
    
      <Header />
      <div className="todo-results">
      Done: 
    </div>
      <CreateNote passNote={addNote} countnote={totalnote} />

      {addItem.map((val, index) => {
        return (
          <Note
            id={index}
            title={val.title}
            number={val.number}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
