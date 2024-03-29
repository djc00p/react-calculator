import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state ={
    // value to be displayed in <Display />
    displayValue: '0',
    // value to be displayed in number <Keys />
    numbers: [],
    // value to be displayed in operator <Keys />
    operators: [],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operation');
  }

  updateOperator = () => {
    console.log('update display');
  }

  render = () => {
    return (
      <div className="calculator-container" />
    );
  }
}

export default Calculator;
