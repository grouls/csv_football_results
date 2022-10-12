"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manCityWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
        manCityWins++;
    }
    else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
        manCityWins++;
    }
}
console.log(`Man City won ${manCityWins} games.`);
