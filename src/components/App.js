import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <h2>Tooltip</h2>
      <div> 
        <p>Hover over me <Tooltip text="This is a tooltip">This is a tooltip</Tooltip></p>
      </div>

      <div>
      
        <button>
          Hover over me to see another tooltip<Tooltip text="This is another tooltip">This is another tooltip</Tooltip>
        </button>

      <Tooltip text="Information about this icon">
        <span style={{ fontSize: '24px', cursor: 'pointer' }}>🔍</span> {/* Added an icon */}
      </Tooltip></div>
    </div>
  );
}

export default App;