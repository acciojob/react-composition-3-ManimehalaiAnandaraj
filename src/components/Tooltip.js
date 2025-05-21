import React, { useState } from 'react';
import './../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <div 
        className="tooltip" 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false) }
      >
       <p>{children}</p> 
      </div>
      {isVisible && (
        <div className="tooltiptext">
         <p>{text}</p> 
        </div>
      )}
    </div>
  );
};

export default Tooltip;