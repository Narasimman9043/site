import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset } from "./storeredux"; 
const Todo= () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
      <div style={{
        textAlign:"center",
        fontSize:"40px",
        border:"2px solid black",
       justifyContent:"center",
       width:"400px",
       margin:"200px auto",
       padding:"40px",
       backgroundColor:"gray"
     }}>
        <div>Count:{count}</div>
        
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    );
  };
  

 
 export default Todo;
 