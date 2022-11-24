import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../../models/gitbub.models';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Input() username!: string;
  followings$?: Observable<Owner[]>;
  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.followings$ = this.github.getFollowings(this.username);
  }

}
