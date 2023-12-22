import Board from './board/Board';
import { Matrix } from './board/Matrix';

function App() {
  const { matrix } = new Matrix(20);

  return (
    <>
      <p className="text-center pt-8">
        Instructions: Match two fruits of the same type. The path between the
        two fruits cannot have more than 3 turns.
      </p>
      <Board matrix={matrix} />
    </>
  );
}

export default App;
