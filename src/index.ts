import { ConsoleReport } from './reportTargets/ConsoleReport';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader }   from './MatchReader';
import { Summary }       from './Summary';
import { WinsAnalysis }  from './analyzers/WinsAnalysis';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const summary = new Summary(new WinsAnalysis('Man City'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
