import { Component, Input } from '@angular/core';
import { Match, Teams } from './../groups/groups.component';

@Component({
  selector: 'app-knockout-stage',
  templateUrl: './knockout-stage.component.html',
  styleUrls: ['./knockout-stage.component.scss']
})
export class KnockoutStageComponent {

  @Input() roundOf16Matches: Match[] = [];
  @Input() quarterFinalsMatches: Match[] = [];
  @Input() semiFinalsMatches: Match[] = [];
  @Input() finalMatch: Match = {
    team1: {
      name: '',
      position: 1
    },
    team2: {
      name: '',
      position: 1
    },
  };
  @Input() champion: Teams = {
    name: '',
    position: 1
  };

  selectWinner(match: Match, team: Teams, stage: string) {
    match.winner = team;
  }

  advanceToQuarterFinals() {
    this.quarterFinalsMatches = [];
    for (let i = 0; i < this.roundOf16Matches.length; i += 2) {
      const team1 = this.roundOf16Matches[i].winner;
      const team2 = this.roundOf16Matches[i + 1].winner;

      if (team1 && team2) {
        this.quarterFinalsMatches.push({ team1, team2 });
      } else {
        console.error('Winner is undefined for one of the matches in the round of 16.');
      }
    }
  }

  advanceToSemiFinals() {
    this.semiFinalsMatches = [];
    for (let i = 0; i < this.quarterFinalsMatches.length; i += 2) {
      const team1 = this.quarterFinalsMatches[i].winner;
      const team2 = this.quarterFinalsMatches[i + 1].winner;

      if (team1 && team2) {
        this.semiFinalsMatches.push({ team1, team2 });
      } else {
        console.error('Winner is undefined for one of the matches in the quarter-finals.');
      }
    }
  }

  advanceToFinal() {
    const team1 = this.semiFinalsMatches[0]?.winner;
    const team2 = this.semiFinalsMatches[1]?.winner;

    if (team1 && team2) {
      this.finalMatch = { team1, team2 };
    } else {
      console.error('Winner is undefined for one of the matches in the semi-finals.');
    }
  }

  showChampion() {
    this.champion = this.finalMatch.winner || {
      name: '',
      position: 1
    };;
  }

}

