import React from "react";
import "./Button.css"


export default function Button({ operation, col2, col3, label, click }) {

  let classes = 'button'
  classes += operation ? ' operation' : ''
  classes += col2 ? ' col2' : ''
  classes += col3 ? ' col3' : ''

  return(
    <button  onClick={() => click && click(label)}  
      className={classes}
    >{label}</button>
  )
}