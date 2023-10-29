import React from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
  isClicked: () => void;
}

const Square: React.FC<Props> = ({hasItem, clicked, isClicked}) => {

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'none', backgroundImage: 'url("/public/square.svg")',
    backgroundSize: 'none', backgroundRepeat: 'no-repeat',
    backgroundPosition: 'none',
  };

  if (clicked) {
    boxStyle.backgroundImage = 'none';
  }

  if (clicked && hasItem) {
    boxStyle.backgroundImage = 'url("/public/gold.svg")';
    boxStyle.backgroundPosition = 'center';
  }

  return (
    <div style={boxStyle} className={`square hasItem:${hasItem} clicked:${clicked}`} onClick={isClicked}>
    </div>
  );
};

export default Square;