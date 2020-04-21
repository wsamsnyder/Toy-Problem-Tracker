import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello World? does this work?
      {count}
      <button type="button" onClick={() => setCount(count + 1)}> LOL </button>
    </div>
  );
}
