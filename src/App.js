import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default App;