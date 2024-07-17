import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
// import Button from '@material-ui/core/Button';
import './App.css';
const Note =(props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    };

 

   
    return  (<>
        <div className='note'>
            <h1 >{props.title} </h1>
            <br/>
            <p >{props.content}</p>
          
            <button className='btn' onClick={deleteNote}>
            <DeleteOutlineIcon  className='deleteIcon'/>
            </button>
            
        </div>
    </>);
}

export default Note;