//#1

const [fruit, vegetables, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];

console.log(fruit, vegetables, food);

//#2

const halloween = {
  mermadelo: "I don't actually know",
  cuscus: "I'm just guessing",
  shikaka: "Jim Carey movie",
  fran: "I'm literally copied this",
};

const { mermadelo, cuscus, shikaka, fran } = halloween;
console.log(mermadelo, cuscus, shikaka, fran);

//#3

const musician = {
  name: "Lil wayne",
  greatestHits: "A milli",
  nationality: "American",
  genre: "Hip Hop",
};

const { name, greatestHits, nationality, genre } = musician;

console.log(
  `${name} is an ${nationality} rapper. His genre is ${genre} and has ${greatestHits} as his greatest hit. `
);
