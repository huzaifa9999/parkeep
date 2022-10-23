import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const CreateNote = (props) => {


    const [note, setNote] = useState({
        title: "",
        number: "",
    });

    const InputEvent = (event) => {


        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

        console.log(note);
    };
    const addEvent = () => {
        props.passNote(note);
props.countnote(note);
        setNote({
            title:"",
            number:"",
        });
    };

   

    return (
        <>
            <div className="main_note">
                <form>
              
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Name'
                    />

<input
                        type="text"
                        name="number"
                        value={note.number}
                        onChange={InputEvent}
                        placeholder='Number'
                    />

                   
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> 
                </form>
            </div>
        </>
    )
}

export default CreateNote