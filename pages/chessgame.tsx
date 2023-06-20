import { useEffect, useRef } from 'react';
import Chessboard from 'chessboardjs';
import { Chess } from 'chess.js';

function HomePage() {

  useEffect(() => {
    const chess = new Chess();
  
    const board = Chessboard('myBoard', 'start');
  
    // Use the chess instance as needed
    console.log(chess.ascii());

    return () => {
      
    };
  }, []);
  
  return (
    <div>
      <div id="myBoard" style={{ width: '400px' }}></div>
      <div>CHESS</div>
    </div>
  );
}

export default HomePage;
