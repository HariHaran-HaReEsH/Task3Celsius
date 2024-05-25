import './App.css';
import React, { useState } from 'react';
import Fahrenheit from './Fahrenheit';


function App(props) {
    const [inp,setinp]=useState('');
    
    const einput=(event)=>{
      setinp(event.target.value);
    
    }
    

    
 

    
  return (
    <div className='App'>
    <label>Enter temperature in Celsius:</label>
    <input type='text'  onChange={einput}></input>
    <Fahrenheit value={(inp*1.8)+32} measure='C'/>
    <br></br>
    
    <br></br>
    
    
    
    </div>
  );
}

export default App;
