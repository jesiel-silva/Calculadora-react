import React, { Component } from 'react';

import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearMemory: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState }

  constructor({ operation, col2, col3, label }) {
    super(operation, col2, col3, label)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  clearMemory() {
    this.setState({ ...initialState })
  }

  setOperation(operation) {
    if(this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true })
    }
    else{
      const finished = operation === '='
      const currentOperation = this.state.operation
      const values = [ ...this.state.values ]

      try{
        values[0] = eval( ` ${values[0]} ${currentOperation} ${values[1]}` )
      }catch(e){
        values[0] = this.state.values[0]
      }

      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: finished ? null : operation,
        current: finished ? 0 : 1,
        clearDisplay: !finished,
        values
      })
    }
  }

  addDigit(n) {

    if(n === '.' && this.state.displayValue.includes('.')) return

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue

    const displayValue = currentValue + n

    this.setState({ displayValue, clearDisplay: false })

    if(n !== '.'){
      const i = this.state.current
      const newValue = parseFloat(displayValue)

      const values = [ ...this.state.values ]

      values[i] = newValue

      this.setState({ values })
    }

  }

  render() {
    return (
      <div className='calculator'>

        <Display setCaracter={this.state.displayValue} />
        <Button label='AC' click={this.clearMemory} col3 operation/>
        <Button label='/' click={this.setOperation} operation/>
        <Button label='7' click={this.addDigit} />
        <Button label='8' click={this.addDigit} />
        <Button label='9' click={this.addDigit} />
        <Button label='*' click={this.setOperation} operation/>
        <Button label='4' click={this.addDigit} />
        <Button label='5' click={this.addDigit} />
        <Button label='6' click={this.addDigit} />
        <Button label='-' click={this.setOperation} operation/>
        <Button label='1' click={this.addDigit} />
        <Button label='2' click={this.addDigit} />
        <Button label='3' click={this.addDigit} />
        <Button label='+' click={this.setOperation} operation/>
        <Button label='0' click={this.addDigit} col2 />
        <Button label='.' click={this.addDigit} operation/>
        <Button label='=' click={this.setOperation} operation/>

      </div>
    )

  }


}
