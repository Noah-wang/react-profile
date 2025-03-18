import React, { useState } from 'react';
import "./CardStyle.css";


// In your Card component
const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    
    const handleFlip = () => {
      if (!isFlipped) {
        setIsFlipped(true);
      }
    };
  
    return (
      <div className="card-container">
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
         
          <div 
            className="card-front"
            onClick={handleFlip}
          >
            {frontContent}
          </div>
          
          {/* Back of card */}
          <div className="card-back">
            {backContent}
          </div>
        </div>
      </div>
    );
  };

export default Card;