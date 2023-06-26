import { useState } from "react";
import { Chess} from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  
  const [game, setGame] = useState(new Chess());

  function makeAMove(move: any) {
    try {
    game.move(move);
    }
    catch {
      console.log("Invalid Move")
    }

    const newGame = new Chess(game.fen());
    setGame(newGame);
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (!game.isGameOver() || !game.isDraw || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
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