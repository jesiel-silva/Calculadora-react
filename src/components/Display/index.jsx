import React from "react";
import './Display.css';

export default function Display({ setCaracter }) {
  return(
    <div className="display">{setCaracter}</div>
  )
}