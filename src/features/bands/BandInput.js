import React,{useState} from "react";
import {bandAdded} from "./bandsSlice"
import {useDispatch} from "react-redux"


function BandInput({onBandSubmit}) {
  const[name,setName]=useState("")
 
  function handleSubmit(e){
    e.preventDefault()
    onBandSubmit(name)
    setName("")
  }
  return <div>
    <form onSubmit={handleSubmit}>
    <label>name
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
    </label>
    <button type="submit">add band</button>
    </form></div>;
}

export default BandInput;
