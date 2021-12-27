/**
 * @file Test react component.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React, { useEffect, useState } from 'react';
import './TestComponent.scss';

/**
 * Backend interaction example.
 * @returns {Promise}
 */
function requestBackend() {
  return new Promise((resolve, reject) => {
  fetch('/json')
    .then(res => {
      if(!res.ok) {
        return Promise.reject(new Error('Server returned error code: ' + res.status));
      }
      return res;
    })
    .then(res => res.json())
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  });
}

/**
 * @typedef {object} Props
 * @prop {string} test Test prop
 */

/**
 * Component itself.
 * @param {Props} props Component properties.
 */
function TestComponent(props) {
  const [JSONData, setJSONData] = useState(null);

  useEffect(() => {
    // Component did mount.
    requestBackend()
      .then(data => {
        console.log(data);
        setJSONData(data);
      })
      .catch(err => {
        console.error('Error: ' + err.message);
      });
  }, []);

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

      <div>
        <b>JSON</b>
      </div>
      <pre>
        {JSON.stringify(JSONData, null, 2)}
      </pre>
    </>
  );
}

export default TestComponent;
