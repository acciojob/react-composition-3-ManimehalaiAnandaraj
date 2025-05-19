import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <Tooltip text="This is a tooltip">
        <h2>Hover over me</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <p>
          Hover over me to see another tooltip
        </p>
      </Tooltip>

      <Tooltip text="Information about this icon">
        <span style={{ fontSize: '24px', cursor: 'pointer' }}>🔍</span> {/* Added an icon */}
      </Tooltip>
    </div>
  );
}

export default App;