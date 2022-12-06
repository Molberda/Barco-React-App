import React from 'react';

const Scroll = ({ link }) => {
    return (
        <a href={link}>
        <div className="scroll__icon click">
          <div className="scroll__dot"></div>
        </div>
      </a>
    );
}

export default Scroll;
