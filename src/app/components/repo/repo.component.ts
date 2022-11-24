import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../../models/gitbub.models';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import langColors from '../../../assets/language_colors.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() username!: string;
  loading: Boolean = false;
  colors: any = langColors;
  repos$?: Observable<Repo[]>;

  

  constructor(private github: GithubService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.repos$ = this.github.getRepos(this.username).pipe(
      switchMap((repos: Repo[]) => {
        return of(repos);
      })
    );
  }

  redirectTo(url:string) {}
}
