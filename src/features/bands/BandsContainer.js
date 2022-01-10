import React from "react";
import {useSelector,useDispatch} from "react-redux"
import Band from "./Band";
import BandInput from "./BandInput";
import {bandAdded} from "./bandsSlice"

function BandsContainer() {
  const dispatch=useDispatch()

  function handleBandSubmit(name){
    dispatch(bandAdded(name))
  }
  const bandnames=useSelector((state)=>state.bands.entities)
  return <div>
    <BandInput onBandSubmit={handleBandSubmit}/>
    {bandnames.map((band,index)=><Band key={index} bandname={band}></Band>)}
  </div>;
}

export default BandsContainer;
