# Colour Flood

A React/Redux web app I made that recreates the classic game Colour Flood/Flood It.

[Play the game here](https://jackstandbridge.github.io/colour-flood/).

The app was done as a practice project to try making a game with React/Redux.

It currently supports a 10x10 grid that can be randomized to include 4, 5 or 6 colours to create different levels. In addition, it tracks the number of moves taken to flood the board, and the best score for each of the levels.

The project is hosted on github pages using the gh-pages package, which creates a branch for github pages display purposes. To get a React app to display on github pages, follow these steps:

- `$ npm install gh-pages`

- add `"homepage": "https://<github username>.github.io/<project name>/"` to package.json

- add `"predeploy": "npm run build"` to package.json in the "scripts" object.

- add `"deploy": "gh-pages -d build"` to package.json in the "scripts" object.

- `$ npm run deploy`

### Features that could be added:

- Some kind of resizing of the board to allow 5x5, 10x10, 15x15 sized boards, etc.

- Some kind of notice to the player that they have won when they completely fill the board.

- An undo button.

- Data persistence to save the high score for returning players.

- Reimagined game setup where the player can move the place where the colours are piped into the board

- Clicking colours on the game board switches to that colour.
