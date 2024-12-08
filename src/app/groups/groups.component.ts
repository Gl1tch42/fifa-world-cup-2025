import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Group {
  name: string;
  teams: Teams[];
  qualifiedTeams: Teams[];
}

export interface Teams {
  name: string;
  position: number;
  imagem?: string;
}

export interface Match {
  team1: Teams;
  team2: Teams;
  winner?: Teams;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  groups: Group[] = [
    {
      name: 'Grupo A', teams: [
        { name: 'Palmeiras', position: 1, imagem: "https://www.bing.com/th?id=OSB.%7c%7c57YTXrDPlBlRvdxLIw6Q--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Porto', position: 2, imagem: 'https://th.bing.com/th?id=OSB.wZhzAAES7h_0jw2i_iwuoA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports' },
        { name: 'Al-Ahly', position: 3, imagem: "https://www.bing.com/th?id=OSB.HWVLYovvJt4n6hhN4OzJFw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Inter Miami', position: 4, imagem: "https://www.bing.com/th?id=OSB.NNuojwv5UNh29bdSWJM_Mg--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    },
    {
      name: 'Grupo B', teams: [
        { name: 'Paris Saint-Germain', position: 1, imagem: "https://th.bing.com/th?id=OSB.qGnsop_03w3ynMjJcdFDbg--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Atlético de Madrid', position: 2, imagem: "https://th.bing.com/th?id=OSB.6FU4bH2DWUoELzbC4UrYgw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Botafogo', position: 3, imagem: "https://th.bing.com/th?id=OSB.ETpnHrZT5qXvdTRAkddXAg--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Seattle Sounders', position: 4, imagem: "https://www.bing.com/th?id=OSB.zikQVy9XSFoM%7c6vnax0ccA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo C', teams: [
        { name: 'Bayern de Munique', position: 1, imagem: "https://th.bing.com/th?id=OSB.F2KuCQqGSNe0wvHOLoBuxQ--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Auckland City', position: 2, imagem: "https://www.bing.com/th?id=OSB.5zjiU9CzSnRO6yP0teiOYw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Boca Juniors', position: 3, imagem: "https://th.bing.com/th?id=OSB.re2CYKE03ftd03B50%7c7LfQ--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Benfica', position: 4, imagem: "https://th.bing.com/th?id=OSB.XnAFe3oM7oIBzxT6p8pWpA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo D', teams: [
        { name: 'Flamengo', position: 1, imagem: "https://img.sofascore.com/api/v1/team/5981/image" },
        { name: 'Espérance de Tunis', position: 2, imagem: "https://th.bing.com/th?id=OSB.vQa3c6MpX9lBkMj9Y8xXMA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Chelsea', position: 3, imagem: "https://th.bing.com/th?id=OSB.uAKJHtbZ2yBdJDNZ7GD2Kg--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'León', position: 4, imagem: "https://www.bing.com/th?id=OSB.a%7cZpBMGrxn2W6LAjM_0YKw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo E', teams: [
        { name: 'River Plate', position: 1, imagem: "https://th.bing.com/th?id=OSB.DACKSriYypKF2V8ssoHMcQ--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Urawa Red Diamonds', position: 2, imagem: "https://th.bing.com/th?id=OSB.Nkw_Ex4rOIf_0pJafwJQ5g--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Monterrey', position: 3, imagem: "https://th.bing.com/th?id=OSB._fbQjJQgx7uozI5NNiNQBA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Inter de Milão', position: 4, imagem: "https://th.bing.com/th?id=OSB.Ke_3loH0J8XQxL3gVTo1oQ--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo F', teams: [
        { name: 'Fluminense', position: 1, imagem: "https://th.bing.com/th?id=OSB.8710TGNn3ooQIp8wx%7cCcDA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Borussia Dortmund', position: 2, imagem: "https://th.bing.com/th?id=OSB.Sd_qXw1HLdgnGdkmI7EJ8A--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Ulsan', position: 3, imagem: "https://www.bing.com/th?id=OSB.AAeUXSk.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Mamelodi Sundowns', position: 4, imagem: "https://www.bing.com/th?id=OSB.JwapUkjPF11CNjT%7cAYcDWw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo G', teams: [
        { name: 'Manchester City', position: 1, imagem: "https://th.bing.com/th?id=OSB.by_oG1thdqgW2cd%7clhtlSA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Wydad Casablanca', position: 2, imagem: "https://img.sofascore.com/api/v1/team/36268/image" },
        { name: 'Al Ain', position: 3, imagem: "https://www.bing.com/th?id=OSB.umuS10jAWyZ5c0JYvWVPTw--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Juventus', position: 4, imagem: "https://th.bing.com/th?id=OSB.vNQsLQlEyhg9trOcq1crow--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    }, {
      name: 'Grupo H', teams: [
        { name: 'Real Madrid', position: 1, imagem: "https://www.bing.com/th?id=OSB.iACK1IFXXDNVcL9vAy568w--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Al-Hilal', position: 2, imagem: "https://th.bing.com/th?id=OSB.7XKkeDBxwyasQZDlDZeeaA--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'Pachuca', position: 3, imagem: "https://www.bing.com/th?id=OSB.K7aaWAOAi0wj23W8HjPeew--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
        { name: 'RB Salzburg', position: 4, imagem: "https://th.bing.com/th?id=OSB.8Kd79R2Nig7gTJqD47wu5Q--.png&w=60&h=60&c=6&qlt=90&o=6&dpr=2&pid=BingSports" },
      ],
      qualifiedTeams: []
    },
  ];

  roundOf16Matches: Match[] = [];
  quarterFinalsMatches: Match[] = [];
  semiFinalsMatches: Match[] = [];
  finalMatch: Match = {
    team1: {
      name: '',
      position: 1
    },
    team2: {
      name: '',
      position: 1
    },
  };
  champion: Teams = {
    name: '',
    position: 1
  };


  drop(event: CdkDragDrop<Teams[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.updatePositions(event.container.data);
    this.createKnockoutStage();
  }

  updatePositions(teams: Teams[]) {
    teams.forEach((team, index) => { team.position = index + 1; });
  }

  selectQualifiedTeams() {
    this.groups.forEach(group => {
      group.qualifiedTeams = group.teams.slice(0, 2).sort((a, b) => a.position - b.position);
    });
  }

  createKnockoutStage() {
    this.selectQualifiedTeams();

    let qualifiedTeams: any[] = []
    this.groups.map(group => {
      group.qualifiedTeams.map(qualified => {
        qualifiedTeams.push(qualified);
      })
    });

    this.roundOf16Matches = [
      { team1: qualifiedTeams[0], team2: qualifiedTeams[3] }, // 1º do A x 2º do B
      { team1: qualifiedTeams[4], team2: qualifiedTeams[7] }, // 1º do C x 2º do D
      { team1: qualifiedTeams[8], team2: qualifiedTeams[11] }, // 1º do E x 2º do F
      { team1: qualifiedTeams[12], team2: qualifiedTeams[15] }, // 1º do G x 2º do H
      { team1: qualifiedTeams[2], team2: qualifiedTeams[1] }, // 1º do B x 2º do A
      { team1: qualifiedTeams[6], team2: qualifiedTeams[5] }, // 1º do D x 2º do C
      { team1: qualifiedTeams[10], team2: qualifiedTeams[9] }, // 1º do F x 2º do E
      { team1: qualifiedTeams[14], team2: qualifiedTeams[13] } // 1º do H x 2º do G
    ];

    console.log(this.roundOf16Matches)
    this.quarterFinalsMatches = [];
    this.semiFinalsMatches = [];
    this.finalMatch = {
      team1: {
        name: '',
        position: 1
      },
      team2: {
        name: '',
        position: 1
      },
    };
    this.champion = {
      name: '',
      position: 1
    };
  }
}
