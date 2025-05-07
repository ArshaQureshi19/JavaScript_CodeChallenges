//Code Challenge 3 , DataStructure
const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yelloe Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [88, "Goal"],
  [92, "Yelloe Card"],
]);
//Q1.
//console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
//3
console.log(
  `An event happened, on average , every ${90 / gameEvents.size} Minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average , every ${time / gameEvents.size} Minutes`
);
//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half}Half] ${min} :${event}`);
}
