import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

let manCityWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
    manCityWins++;
  } else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
    manCityWins++;
  }
}

console.log(`Man City won ${manCityWins} games.`);
