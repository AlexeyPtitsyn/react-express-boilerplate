import React, { useState } from 'react';
import './TestComponent.scss';

function TestComponent(props) {
  const [count, setCount] = useState(0);


  const increase = function() {
    setCount(count + 1);
  }

  const decrease = function() {
    setCount(count - 1);
  }

  return (
    <>
      Simple counter:
      
      <div className="test">{ count }</div>
      
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default TestComponent;
