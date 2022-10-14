"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manCityWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man City' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manCityWins++;
    }
    else if (match[2] === 'Man City' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manCityWins++;
    }
}
console.log(`Man City won ${manCityWins} games.`);
