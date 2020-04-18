import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello World?
      {count}
      <button type="button" onClick={() => setCount(count + 1)}> LOL </button>
    </div>
  );
};

export default App;
