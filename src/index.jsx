/**
 * @file Index react component.
 * @author Alexey Ptitsyn <alexey.ptitsyn@gmail.com>
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */

import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/TestComponent.jsx';

ReactDOM.render(
  <TestComponent test="123" />,
  document.getElementById('app')
);
