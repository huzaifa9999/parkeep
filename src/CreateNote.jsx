import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const CreateNote = (props) => {

    const [expand,setExpand]=useState(false);

    const [note, setNote] = useState({
        title: "",
        number: "",
    });

    const InputEvent = (event) => {

        // const value=event.target.value;
        // const name= event.target.name;

        const { name, value } = event.target;//can also write this object destructing instead of above 2 lines

        //whatever user writes name or value we get it

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
            title: "",
            number: "",
        });
    };

    const expandIt=()=>{
        setExpand(true);
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