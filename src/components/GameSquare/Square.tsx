import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;

}

const Square:React.FC<Props> = ({hasItem, clicked}) => {
  return (
    <div className={`square hasItem: ${hasItem} clicked: ${clicked}`}>
      <span>
      </span>
    </div>
  );
};

export default Square;