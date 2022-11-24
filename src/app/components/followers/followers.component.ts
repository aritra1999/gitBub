import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from 'src/app/models/gitbub.models';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input() username!: string;
  followers$?: Observable<Owner[]>;
  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.followers$ = this.github.getFollowers(this.username);
  }

}
