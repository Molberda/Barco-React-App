import React from 'react';

const Scroll = ({ link }) => {
    return (
        <a href={link}>
        <div class="scroll__icon click">
          <div class="scroll__dot"></div>
        </div>
      </a>
    );
}

export default Scroll;
