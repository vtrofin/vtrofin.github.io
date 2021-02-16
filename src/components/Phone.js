import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Phone = ({ phone }) => {
  const [showNumber, setShowNumber] = useState(false);
  window.addEventListener('beforeprint', event => setShowNumber(true));
  window.addEventListener('afterprint', event => setShowNumber(false));

  // least effort animation
  // see http://reactcommunity.org/react-transition-group/css-transition
  // minor transition issue on afterprint but not a big deal
  // expected behavior -> button to render after transition ended

  return (
    <div>
      {!showNumber && (
        <div className="phone-number-button" onClick={() => setShowNumber(true)}>
          Phone number
        </div>
      )}
      <CSSTransition
        timeout={300}
        in={showNumber}
        classNames="phone-number"
        onExited={() => setShowNumber(false)}
        unmountOnExit
      >
        {<p className="phone-number">{phone}</p>}
      </CSSTransition>
    </div>
  );
};

export default Phone;
