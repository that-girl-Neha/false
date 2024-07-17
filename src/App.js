import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{


  
  const [addItem,setAddItem] =useState([]);
  const addNote=(note)=>{
    setAddItem((prev)=>{

      return [...prev,note];
    });
  };

  const onDelete=(id)=>{
    return    setAddItem((prev)=>{

     return    prev.filter((curr,i)=>{
          return i!==id;
        });
        });
  };

 
  return (
   <>
   <Header/>
   <CreateNote
    passNote={addNote}
   />
 
  {addItem.map((val,index)=>{

  return (<Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
     
        
  />);
  })}
    <Footer/>
    
   </>
  );
}

export default App;
