import React from 'react'
import Calculator from './main';
import Title from './components/Title';
import './App.css'

export default function App() {
  return (   
    <div className='app'>
      <Title title='Calculadora React JS'/>  
      <Calculator />
    </div>

  );
}

