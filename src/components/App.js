import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      
            <div><h2>
     <Tooltip text="This is a tooltip">
        Hover over me 
      </Tooltip></h2>
      </div>

      <div>
      <Tooltip text="This is another tooltip">
        <p>
          Hover over me to see another tooltip
        </p>
      </Tooltip>
    

      <Tooltip text="Information about this icon">
        <span style={{ fontSize: '24px', cursor: 'pointer' }}>🔍</span> {/* Added an icon */}
      </Tooltip></div>
    </div>
  );
}

export default App;