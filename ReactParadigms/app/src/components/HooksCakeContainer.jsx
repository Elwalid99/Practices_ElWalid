import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { useDispatch, useSelector } from "react-redux";

const CakeContainer = (props) => {
    const numOfCake = useSelector(state => state.numOfCake)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Cake: {numOfCake}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
