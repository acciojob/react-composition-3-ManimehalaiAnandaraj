import React, { useState } from 'react';
import './../styles/Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="tooltip-container">
      <div 
        className="tooltip" 
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
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