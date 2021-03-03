import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  public teams$ : Observable<Team[]>

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
  this.teams$=this.teamService.getTeams();
  this.teamService.getTeams();
  }

}
