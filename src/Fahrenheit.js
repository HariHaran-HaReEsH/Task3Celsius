
import React from "react";
// import {App} from '/App.js';

function Fahrenheit (props){
    return(<div style={{color:"white"}}>
    <label>Temperature in Fahrenheit:</label>
    <input type='text'  value={props.value}></input>
    {props.value>=200 ? <h3>Water will boil at {props.value}'F</h3>:<h3>Water WillNot Boil at {props.value}'F</h3>}
    {/* {App.inp2=props.value} */}
    </div>);
}

export default Fahrenheit;