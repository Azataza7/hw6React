import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  isClicked: () => void;
}

const Square:React.FC<Props> = ({hasItem, clicked, isClicked}) => {
  return (
    <div className={`square hasItem: ${hasItem} clicked: ${clicked}`} onClick={isClicked}>
      <span>
      </span>
    </div>
  );
};

export default Square;