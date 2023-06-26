const { useState } = require("react");
const Chess = require("chess.js").Chess;
const { Chessboard } = require("react-chessboard");

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    const isGameOver =
      game.in_checkmate == true || game.in_draw==true || game.in_stalemate==true;
  
    if (isGameOver || possibleMoves.length === 0) {
      return; // exit if the game is over
    }
  
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }
  

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '800px', height: '800px' }}>
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
        />
      </div>
      <div>CHESS</div>
    </div>
  );
  
}
