import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/gitbub.models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  pageLoading: boolean;
  page:string = "repos";
  user$?: Observable<User>;
  

  constructor(private activeRouter: ActivatedRoute, private github: GithubService) { 
    this.pageLoading = false;
    this.username = this.activeRouter.snapshot.params["username"];
  }

  ngOnInit(): void {
    this.user$ = this.github.getUserDetails(this.username);
  }

  switchPage(to: string) {
    this.page = to;
  }
}
