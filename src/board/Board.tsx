// Creates a new n by n board

import Cell from '../cell/Cell';
import { checkMatch } from '../libs/checkMatch';
import { useState } from 'react';

export default function Board({ matrix }: { matrix: number[][] }) {
  const [clickNum, setClickNum] = useState(1);
  const [clickOne, setClickOne] = useState({ x: 0, y: 0 });

  const size = matrix.length;
  const board = Array(size * size);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const rowIndex = parseInt(target.getAttribute('data-row') || '0');
    const colIndex = parseInt(target.getAttribute('data-col') || '0');

    if (rowIndex === 0 && colIndex === 0) {
      return;
    }

    if (clickNum === 1) {
      setClickOne({ x: rowIndex, y: colIndex });
    } else if (clickNum === 2) {
      const clickTwo = { x: rowIndex, y: colIndex };

      if (checkMatch(matrix, clickOne, clickTwo)) {
        console.log('match');
        matrix[clickOne.x][clickOne.y] = 0;
        matrix[clickTwo.x][clickTwo.y] = 0;
      } else {
        console.log('no match');
        setClickOne({ x: 0, y: 0 });
      }
    }

    setClickNum(num => (num === 1 ? 2 : 1));
  };

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board.push(
        <Cell
          value={matrix[i][j]}
          rowIndex={i}
          colIndex={j}
          handleClick={handleClick}
          key={`${i}-${j}`}
        />
      );
    }
  }

  // return <div className={`grid grid-cols-${size} max-w-5xl`}>{board}</div>;
  return (
    <div className="grid grid-cols-22 max-w-5xl mx-auto my-8">{board}</div>
  );
}
