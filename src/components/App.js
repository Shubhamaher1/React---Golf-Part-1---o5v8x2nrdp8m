import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';
import React from 'react'

export const App = () => {
    const[renderBall,setRenderBall]=useState(false);
    const[position , setPosition]=useState(0);
    const[ballPosition,setBallPosition]=useState({left:"0px"});
    function buttonClickHandler() {
        setRenderBall(true)
   
    }
  
    function  renderBallOrButton() {
		if (renderBall) {
		    return <div className="ball" style={{position:"absolute",left:ballPosition.left}}></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    }
    useEffect(()=>{
        document.addEventListener("keydown",(e)=>{
           if(e.key==="ArrowRight"){
               setBallPosition({left:ballPosition.left+5})
           }
        })

    },[])
  return (
     <div className="playground">
                {renderBallOrButton()}
            </div>
  )
}


export default App;
