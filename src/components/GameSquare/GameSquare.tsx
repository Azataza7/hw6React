import Square from './Square';
import React, {useState} from 'react';

const GameSquare = () => {
  const [squares, setSquares] = useState([]);

  const createItems = () => {
    const quantityOfSquares = 36;
    const squaresCopy = [];

    for (let i = 0; i < quantityOfSquares; i++) {
      const item = {hasItem: false, clicked: false};
      squaresCopy.push(item);
    }

    const randomSquareIndex = Math.floor(Math.random() * quantityOfSquares);
    squaresCopy[randomSquareIndex] = {hasItem: true, clicked: false};

    setSquares(squaresCopy);
    return squaresCopy;
  };

  const [items, setItems] = useState(createItems);

  return (
    <div className={`game-square`}>
      {items.map((item, index) => (
        <Square key={index} hasItem={item.hasItem} clicked={item.clicked}/>
      ))}
    </div>
  );
};

export default GameSquare;