import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      
   <div>
    
    <h2>
     <Tooltip text="This is a tooltip" aria-label="Tooltip for heading">
        Hover over me 
      </Tooltip></h2>

      <p>
      <Tooltip text="This is another tooltip" aria-label="Tooltip for paragraph">
          Hover over me to see another tooltip
      </Tooltip> </p>
    
</div>
    </div>
  );
}

export default App;