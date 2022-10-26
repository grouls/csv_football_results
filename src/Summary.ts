import { HtmlReport }   from './reportTargets/HtmlReports';
import { MatchData }    from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, fileName: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(fileName));
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
