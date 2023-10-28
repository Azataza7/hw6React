import Square from './Square';
import React, {useState} from 'react';
import ResetButton from '../ResetButton/ResetButton';

interface Props {
  hasItem: boolean;
  clicked: boolean;
}

const GameSquare = () => {
  const [squares, setSquares] = useState<Props[]>([]);

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

  const [items, setItems] = useState<Props[]>(createItems);

  const isClicked = (index: number) => {
    setItems((prevState) => {
      const squareCopy = [...prevState];
      squareCopy[index] = {...squareCopy[index], clicked: true};
      return squareCopy;
    });
  };

  const resetByClick = () => {
    setItems(createItems);
  };

  return (
    <div className={`game-square`}>
      {items.map((item, index) => (
        <Square key={index} hasItem={item.hasItem} clicked={item.clicked} isClicked={() => isClicked(index)}/>
      ))}
      <div className="panel">
        <ResetButton onClick={resetByClick}/>
      </div>
    </div>
  );
};

export default GameSquare;