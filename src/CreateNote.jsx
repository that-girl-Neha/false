import React ,{useState}from 'react';



import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import './App.css';
const CreateNote = (props)=>{
  
    const [expand,setExpand] =useState(false);
    const [note,setNote] =useState({
        title:'',
        content:'',
    });
    const inputEvent =(event)=>{
   
        const {name,value} = event.target;

        setNote((prev)=>{

            return {
                ...prev,
                [name]:value,
            };
        });
        
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        }
        );
        setExpand(false);
    };

    const ExpandIt=()=>{
        setExpand(true);
    }
    const backToNormal=()=>{
        setExpand(false);
    }
    return (<>
        <div className='main_note'>
            <form>
           {expand?
                <input type="text"
                name='title'
                 value={note.title}
                  onChange={inputEvent}
                   placeholder='title' 
                   autoComplete='off'/>:null}
                <textarea value={note.content}
                name="content"
                onClick={ExpandIt}
                onDoubleClick={backToNormal}
                 onChange={inputEvent}
                  rows='' column=''
                   placeholder='write a not here...'/>
           {expand?<Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>:null}
            </form>
        </div>
    </>);
}

export default CreateNote;