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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  toCamelCase(rows);
});
// Challenge 4

const toCamelCase = function (underScoreWords) {
  const maxLength = Math.max(...underScoreWords.map(w => w.length)) + 2;
  for (const [i, el] of underScoreWords.entries()) {
    const [first, last] = el.toLowerCase().trim().split('_');
    const elCorrect = first + last[0].toUpperCase() + last.slice(1);
    const elCorrectPadded =
      elCorrect.padEnd(maxLength, ' ') + '✅'.repeat(i + 1);
    console.log(elCorrectPadded);
  }
};

// /// Challenge 3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents);

// // P1

// const events = [...new Set([...gameEvents.values()])];
// console.log(events);

// // P2

// gameEvents.delete(64);
// console.log(gameEvents);

// // P3
// const duration = [...gameEvents.keys()].pop();
// const eventsPerGame = duration / gameEvents.size;
// console.log(`An event happened, on average, every ${eventsPerGame} minutes.`);

// // P4

// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${minute}: ${event}`);
// }

// /// Challenge 2

// // P1
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

// // P2

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // P3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // P4

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/// Challenge 1

// // P1
// const [players1, players2] = [...game.players];
// console.log(players1);

// //P2

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// // P3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // P4

// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];

// // P5

// let { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // P6

// const printGoals = function (...playerNames) {
//   let numGoals = playerNames.length;
//   console.log('Players that scored a Goal: ');
//   console.log(...playerNames);
//   console.log(`Number of Goals: ${numGoals}`);
// };

// const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
// // printGoals(testData);

// printGoals(...game.scored);

// // P7

// console.log(
//   (team1 < team2 && `${game.team1} wins!`) ||
//     (team2 < team1 && `${game.team2} wins!`)
// );
