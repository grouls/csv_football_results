import { CsvFileReader } from './CsvFileReader';
import { MatchReader }   from './MatchReader';
import { MatchResult }   from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manCityWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man City' && match[5] === MatchResult.HomeWin) {
    manCityWins++;
  } else if (match[2] === 'Man City' && match[5] === MatchResult.AwayWin) {
    manCityWins++;
  }
}

console.log(`Man City won ${manCityWins} games.`);
