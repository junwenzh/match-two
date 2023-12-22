// Renders a cell with the given value

import fruit1 from '../assets/1.png';
import fruit2 from '../assets/2.png';
import fruit3 from '../assets/3.png';
import fruit4 from '../assets/4.png';
import fruit5 from '../assets/5.png';
import fruit6 from '../assets/6.png';
import fruit7 from '../assets/7.png';
import fruit8 from '../assets/8.png';
import fruit9 from '../assets/9.png';
import fruit10 from '../assets/10.png';
import fruit11 from '../assets/11.png';
import fruit12 from '../assets/12.png';

export default function Cell({
  value,
  rowIndex,
  colIndex,
  handleClick,
}: {
  value: number;
  rowIndex: number;
  colIndex: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  let imageUrl: string;

  switch (value) {
    case 1:
      imageUrl = fruit1;
      break;
    case 2:
      imageUrl = fruit2;
      break;
    case 3:
      imageUrl = fruit3;
      break;
    case 4:
      imageUrl = fruit4;
      break;
    case 5:
      imageUrl = fruit5;
      break;
    case 6:
      imageUrl = fruit6;
      break;
    case 7:
      imageUrl = fruit7;
      break;
    case 8:
      imageUrl = fruit8;
      break;
    case 9:
      imageUrl = fruit9;
      break;
    case 10:
      imageUrl = fruit10;
      break;
    case 11:
      imageUrl = fruit11;
      break;
    case 12:
      imageUrl = fruit12;
      break;
    default:
      imageUrl = '';
  }

  if (value === 0) {
    return (
      <div
        className={`w-full h-full min-h-12 col-span-1 text-center`}
        data-row={rowIndex}
        data-col={colIndex}
      >
        {''}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      className={`w-full h-full min-h-12 border col-span-1 text-center`}
      data-row={rowIndex}
      data-col={colIndex}
      onClick={handleClick}
      alt={value.toString()}
    />
  );
}
