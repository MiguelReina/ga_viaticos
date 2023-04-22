import './App.css';
import { useState } from 'react'; 

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0]='X';
    setSquares(nextSquares);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos</h1>
        <h3>Este es el juego tres en raya</h3>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[1]} onSquareClick={handleClick} />
          <Square value={squares[2]} onSquareClick={handleClick} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} onSquareClick={handleClick} />
          <Square value={squares[4]} onSquareClick={handleClick} />
          <Square value={squares[5]} onSquareClick={handleClick} />
        </div>
        <div className='board-row'>
          <Square value={squares[6]} onSquareClick={handleClick} />
          <Square value={squares[7]} onSquareClick={handleClick} />
          <Square value={squares[8]} onSquareClick={handleClick} />
        </div>
      </header>
    </div>
  );
}

function Square({value, onSquareClick}) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default App;
