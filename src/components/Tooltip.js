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
        {children}
      </div>
      {isVisible && (
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;