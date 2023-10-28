import React from 'react';

interface Props {
  onClick: () => void;
}

const ResetButton: React.FC<Props> = ({onClick}) => {
  return (
    <button className="reset-btn" onClick={onClick}>Reset</button>
  );
};

export default ResetButton;