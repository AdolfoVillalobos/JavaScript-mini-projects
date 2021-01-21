'use-strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// P1
const [players1, players2] = [...game.players];
console.log(players1);

//P2

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

// P3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// P4

const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];

// P5

let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// P6

const printGoals = function (...playerNames) {
  let numGoals = playerNames.length;
  console.log('Players that scored a Goal: ');
  console.log(...playerNames);
  console.log(`Number of Goals: ${numGoals}`);
};

const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// printGoals(testData);

printGoals(...game.scored);

// P7

console.log(
  (team1 < team2 && `${game.team1} wins!`) ||
    (team2 < team1 && `${game.team2} wins!`)
);
