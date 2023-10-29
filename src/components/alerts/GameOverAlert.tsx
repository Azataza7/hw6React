import React from 'react';

interface Props {
  display: boolean;
}

const GameOverAlert: React.FC<Props> = ({display}) => {
  let containerStyle: React.CSSProperties;
  if (!display) {
    containerStyle = {display: 'none'}
  }
  return (
    <div style={containerStyle} className="alert-notification">
      <p>You found the gold!</p>
    </div>
  );
};

export default GameOverAlert;