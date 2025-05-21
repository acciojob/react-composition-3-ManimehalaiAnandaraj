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

      <div><p>
      <Tooltip text="This is another tooltip">
        
          Hover over me to see another tooltip
       
      </Tooltip> </p>
    </div>
    
    </div>
  );
}

export default App;