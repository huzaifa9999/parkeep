import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";
import "./App.css";
const App = () => {
const [size,setsize]= useState(0)
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {

      return [...prevData, note];
    });
setsize(size+1)
  };



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
      
      <CreateNote passNote={addNote}  />
      <div className="parking-results">
      No. OF Parked Cars: {size}
    </div>
      {addItem.map((val, index) => {
        return (
          <Note
            id={index}
            title={val.title}
            number={val.number}
            deleteItem={onDelete}
            setsize={setsize}
            size={size}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
