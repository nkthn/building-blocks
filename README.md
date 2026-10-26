# Building Blocks

A 60-second party game of misheard song titles. Each card spells a title the way it sounds ("Swede carrot lime" is *Sweet Caroline*). Type the real title to score. Close spellings count, and faster answers score more (1000 points for an instant answer, down to 500 at 15 seconds or slower). Each correct answer drops a block on your tower, and everyone in the room can see everyone else's tower grow.

Play: https://building-blocks-songs.web.app

## Multiplayer
Everyone opens the site, types the same room code and joins. Anyone can start a round, and it starts for everyone with the same cards in the same order. Rooms run on Firebase Realtime Database (`rooms/<code>/players/<id>`), and each player's entry is removed when they disconnect.

## Develop
- `public/index.html` is the whole game.
- `node test/match.test.js` checks the answer matcher and the speed scoring.
- `npx firebase-tools deploy` deploys hosting and the database rules.
