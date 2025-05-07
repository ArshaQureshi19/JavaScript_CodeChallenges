// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
Explanation of the Code:

Creating Player Arrays: We access the players property of the game object, which is a 2D array. We assign the first and second arrays to players1 and players2.
Goalkeeper and Field Players: We use array destructuring to extract the first element (goalkeeper) into the gk variable, and the rest of the elements (field players) into the fieldPlayers array. The spread syntax (...) is crucial here.
All Players Array: We use the spread syntax again to combine the players1 and players2 arrays into a new array called allPlayers.
players1Final Array: We create a new array players1Final by combining the original players1 array with the substitute player names using the spread syntax.
Odds Variables: We use object destructuring to extract the odds for each team from the game.odds object. We also rename the x property to draw for clarity.
printGoals Function:
It accepts a variable number of arguments using the rest parameter (...playerNames).
It iterates through the playerNames array using forEach and prints each player's name.
It prints the total number of goals by accessing the length of the playerNames array.
The spread syntax is used when calling this function with game.scored to pass the array elements as individual arguments.
Determining Likely Winner:
This uses a ternary operator. It checks if team1's odd is less than team2's odd. If it is, it means team1 is more likely to win, so we use game.team1. Otherwise, we use game.team2.*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  Players: [
    [
      "Never",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretza",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Buri",
      "Schulz",
      "Hummels",
      "Akani",
      "Hakimi",
      "weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:8",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th,2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and 'players2')
const players1 = game.Players[0];
const players2 = game.Players[1];
//console.log(players1);
//console.log(players2);

//////////////////////////////////////////////////////////////
//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
//console.log("GoalKeeper:", gk);
//console.log("Field Players", fieldPlayers);

/////////////////////////////////////////////////////
//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

/////////////////////////////////////////////////
//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
//console.log(players1Final);

///////////////////////////////////////////////////////////////////////
//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
console.log("odds for team1:", team1);
console.log("odds for Draw:", draw);
console.log("odds for team2:", team2);

////////////////////////////////////////////////////////////////////////////////////////////////
//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scoredd`);
};
//printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
//printGoals("Davies", "Muller");
printGoals(...game.scored);

////////////////////////////////////////////////////////////
//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is More likely to win");
team1 > team2 && console.log("Team 2 is More likely to win");
