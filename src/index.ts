import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manCityWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
    manCityWins++;
  } else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
    manCityWins++;
  }
}

console.log(`Man City won ${manCityWins} games.`);
