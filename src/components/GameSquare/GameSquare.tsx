import Square from './Square';
import React, {useState} from 'react';
import ResetButton from '../ResetButton/ResetButton';
import TriesCounter from '../TriesCounter/TriesCounter';
import GameOverAlert from '../alerts/GameOverAlert';

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
  const [gameOff, setGameOff] = useState(false);

  const isClicked = (index: number) => {
    if (gameOff) {
      return;
    }

    setItems((prevState) => {
      const squareCopy = [...prevState];
      squareCopy[index] = {...squareCopy[index], clicked: true};
      return squareCopy;
    });

    if (items[index].hasItem) {
      setGameOff(true);
    }
  };

  const triesCounter = () => {
    let counter = 0;
    items.forEach((item) => {
      if (item.clicked) {
        counter++;
      }
    });
    return counter;
  };

  const resetByClick = () => {
    setGameOff(false);
    setItems(createItems);
  };

  const squareList = (
    items.map((item, index) => (
      <Square key={index} hasItem={item.hasItem} clicked={item.clicked} isClicked={() => isClicked(index)}/>
    ))
  );

  return (
    <div className={`game-square`}>
      <GameOverAlert display={gameOff}/>
      {squareList}
      <div className="panel">
        <TriesCounter counter={triesCounter()}/>
        <ResetButton onClick={resetByClick}/>
      </div>
    </div>
  );
};

export default GameSquare;