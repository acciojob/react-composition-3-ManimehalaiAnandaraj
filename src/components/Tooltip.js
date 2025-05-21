import React, { useState } from 'react';
import './../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="tooltip-container" 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="tooltip">
        {children}
      </div>
      {isVisible && (
        <div className="tooltiptext" aria-hidden={!isVisible}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;