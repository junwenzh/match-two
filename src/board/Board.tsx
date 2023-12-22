// Creates a new n by n board

import Cell from '../cell/Cell';
import { checkMatch } from '../libs/checkMatch';
import { useState } from 'react';

export default function Board({ matrix }: { matrix: number[][] }) {
  const [clickNum, setClickNum] = useState(1);
  const [clickOne, setClickOne] = useState({ x: 0, y: 0 });
  const [remainingCount, setRemainingCount] = useState(countRemaining());

  const size = matrix.length;
  const board = Array(size * size);

  function countRemaining() {
    let count = 0;

    matrix.forEach(row => {
      row.forEach(cell => {
        if (cell !== 0) {
          count++;
        }
      });
    });

    return count;
  }

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
      // if clickOne and clickTwo are the same, do nothing
      if (clickOne.x === rowIndex && clickOne.y === colIndex) {
        return;
      }

      const clickTwo = { x: rowIndex, y: colIndex };

      if (checkMatch(matrix, clickOne, clickTwo)) {
        console.log('match', clickOne, clickTwo);
        matrix[clickOne.x][clickOne.y] = 0;
        matrix[clickTwo.x][clickTwo.y] = 0;
        setRemainingCount(countRemaining());
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
    <div className="max-w-4xl mx-auto my-4">
      <p className="text-center">Fruits Remaining: {remainingCount}</p>
      <div className="grid grid-cols-22 my-4">{board}</div>
    </div>
  );
}
