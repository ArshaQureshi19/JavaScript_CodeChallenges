// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.print Goal Scores With Numbers
console.log("-----Goal Scores-------");
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}:${game.scored[i]}`);
}
//2.Calculate and Print Average Odd
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) {
  sum += odd;
}
const AverageOdd = sum / odds.length;
console.log(`\n Average Odd :${AverageOdd.toFixed(2)}`); //limit to 2 decimal point
console.log("\n-----Odds------");
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw :${game.odds.x}`);
console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);

// 4.Bonus :Create the 'Scorers' Object
const scorers = {};
for (const Player of game.scored) {
  scorers[Player] = (scorers[Player] || 0) + 1;
}
console.log("\n ----Scorers Object----");
console.log(scorers);
