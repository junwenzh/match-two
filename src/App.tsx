import Board from './board/Board';
import { Matrix } from './board/Matrix';

function App() {
  const { matrix } = new Matrix(20);

  return (
    <>
      <Board matrix={matrix} />
    </>
  );
}

export default App;
