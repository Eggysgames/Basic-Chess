=== Basic Chess ===

This project combines 2 repositories into one workable chess engine vs random to get it working in the fastest way possible.

It uses React-Chessboard for the UI - https://www.npmjs.com/package/react-chessboard

It uses Chess.js for the engine - https://github.com/jhlywa/chess.js

Main file found at pages/chessgame.tsx

=== Custom Changes === 

- Uses mover variable to stop random move after illegal moves
- Added alerts for checkmate and draw
- Added logic to make random move after yours
- Uses try/catch to prevent errors
- Converted it to Typescript
- Works automatically out the box
- Added console log for invalid moves



=== Play ===

npm install

npm run dev

Open up localhost:3000/chessgame.tsx
