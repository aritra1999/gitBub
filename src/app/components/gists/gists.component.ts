import { Component, Input, OnInit } from '@angular/core';
import { concatMap, Observable, of } from 'rxjs';
import { Gist } from 'src/app/models/gitbub.models';
import { GithubService } from '../../services/github.service';
import langColors from '../../../assets/language_colors.json';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css'],
})
export class GistsComponent implements OnInit {
  @Input() username!: string;
  gists$?: Observable<Gist[]>;
  colors: any = langColors;

  constructor(private github: GithubService) {}

  ngOnInit(): void {
    this.gists$ = this.github.getGists(this.username);
  }
}
