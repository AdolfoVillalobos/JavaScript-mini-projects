"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital
    city is ${capitalCity}`;
}

// console.log(describeCountry("Chile", 18, "Santiago"));
// console.log(describeCountry("Argentina", 27, "Buenos Aires"));
// console.log(describeCountry("Brazil", 60, "Brasilia"));

const percentageOfWorld1 = function (population) {
  return (population * 100) / 7900;
};

// console.log(percentageOfWorld1(18));
// console.log(percentageOfWorld1(1300));
// console.log(percentageOfWorld1(300));

const percentageOfWorld2 = (population) => (population * 100) / 7900;

// console.log(percentageOfWorld2(18));
// console.log(percentageOfWorld2(1300));
// console.log(percentageOfWorld2(300));

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld2(population).toFixed(2);
  return `${country} has ${population} million people, which
            is about ${percentage}% of the world`;
};

// console.log(describePopulation("China", "1441"));
// console.log(describePopulation("Chile", "18"));
// console.log(describePopulation("USA", "370"));

// const populations = [18, 370, 1441, 100];

// console.log(populations.length === 4);

// const percentages = populations.map(percentageOfWorld2);

// console.log(percentages);

const neighbours = ["Chile", "Peru", "Argentina", "Bolivia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Argentina")] = "Republic of Argentina";
console.log(neighbours);

const myCountry = {
  country: "Chile",
  capital: "Santiago",
  language: "Spanish",
  population: 18,
  neighbours: ["Peru", "Argentina", "Bolivia"],

  describe: function () {
    return `${this.country} has ${this.population} million people,
                ${this.neighbours.length} neighbouring countries and a capital
                called ${this.capital}.`;
  },

  checkIsIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());
