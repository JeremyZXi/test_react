import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('你好，世界！');
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>简单的 React 应用程序</h1>
          <button onClick={handleClick}>点击我</button>
          {message && <p>{message}</p>}
        </header>
      </div>
  );
}

export default App;
