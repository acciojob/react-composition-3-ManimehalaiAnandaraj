import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Tooltip Demo</h1>
      
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <span style={{ color: 'blue', textDecoration: 'underline' }}>
          Hover over me to see another tooltip
        </span>
      </Tooltip>

<Tooltip text="Information about this icon">
        <span style={{ fontSize: '24px' }}>ℹ️</span>
      </Tooltip>
     
    </div>
  );
}

export default App;
