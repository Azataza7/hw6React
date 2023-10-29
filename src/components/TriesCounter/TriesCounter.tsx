import React from 'react';

interface Props {
  counter: number;
}

const TriesCounter: React.FC<Props> = ({counter}) => {
  const getColor = () => {
    if (counter > 30) return 'red';
    if (counter > 20) return 'orange';
    if (counter > 10) return 'yellow';
    return 'white';
  };

  const counterStyle: React.CSSProperties = {color: getColor()};

  return (
    <span className="counter" style={counterStyle}>
      Tries: {counter}
    </span>
  );
};

export default TriesCounter;
