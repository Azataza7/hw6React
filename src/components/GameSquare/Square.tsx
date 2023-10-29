import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  isClicked: () => void;
}

const Square: React.FC<Props> = ({hasItem, clicked, isClicked}) => {

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'grey', backgroundImage: 'none',
    backgroundSize: 'none', backgroundRepeat: 'none',
    backgroundPosition: 'none',
  };

  if (clicked) {
    boxStyle.backgroundColor = 'transparent';
  }

  if (clicked && hasItem) {
    boxStyle.backgroundImage = 'url("/public/gold.svg")';
    boxStyle.backgroundRepeat = 'no-repeat';
    boxStyle.backgroundPosition = 'center';
  }

  return (
    <div style={boxStyle} className={`square hasItem:${hasItem} clicked:${clicked}`} onClick={isClicked}>
    </div>
  );
};

export default Square;