import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gist, Repo, User, Owner } from '../models/gitbub.models';
import { catchError, Observable, of, throwError, concatMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  BASE_URL: string = "https://api.github.com";
  userResponse: User = {
    "login": "aritra1999",
    "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
    "html_url": "https://github.com/aritra1999",
    "name": "Aritra Mondal",
    "company": "LeanIX",
    "blog": "https://aritra1999.github.io/",
    "location": "Kolkata, India",
    "email": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 48,
    "public_gists": 2,
    "followers": 36,
    "following": 15,
    "created_at": new Date("2017-08-01T11:08:26Z"),
  };
  repoResponse: Repo[] = [
    {
      "name": "Ano",
      "html_url": "https://github.com/aritra1999/Ano",
      "description": null,
      "created_at": new Date("2019-11-26T17:34:13Z"),
      "pushed_at": new Date("2019-12-07T21:21:25Z"),
      "ssh_url": "git@github.com:aritra1999/Ano.git",
      "clone_url": "https://github.com/aritra1999/Ano.git",
      "homepage": null,
      "stargazers_count": 1,
      "watchers_count": 1,
      "language": "JavaScript",
      "forks_count": 1,
      "default_branch": "master"
    },
    {
      "name": "aritra1999.github.io",
      "html_url": "https://github.com/aritra1999/aritra1999.github.io",
      "description": null,
      "created_at": new Date("2022-03-20T04:48:02Z"),
      "pushed_at": new Date("2022-08-12T03:12:14Z"),
      "ssh_url": "git@github.com:aritra1999/aritra1999.github.io.git",
      "clone_url": "https://github.com/aritra1999/aritra1999.github.io.git",
      "homepage": null,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "HTML",
      "forks_count": 0,
      "default_branch": "main"
    },
    {
      "name": "Assignments",
      "html_url": "https://github.com/aritra1999/Assignments",
      "description": "Automated Assignments Portal ",
      "created_at": new Date("2020-12-11T17:12:34Z"),
      "pushed_at": new Date("2021-07-04T17:03:54Z"),
      "ssh_url": "git@github.com:aritra1999/Assignments.git",
      "clone_url": "https://github.com/aritra1999/Assignments.git",
      "homepage": null,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "HTML",
      "forks_count": 0,
      "default_branch": "master"
    },
    {
      "name": "AutoClip",
      "html_url": "https://github.com/aritra1999/AutoClip",
      "description": "Let python clip your videos for you. ",
      "created_at": new Date("2020-08-02T17:46:47Z"),
      "pushed_at": new Date("2020-08-02T18:00:57Z"),
      "ssh_url": "git@github.com:aritra1999/AutoClip.git",
      "clone_url": "https://github.com/aritra1999/AutoClip.git",
      "homepage": null,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "Python",
      "forks_count": 0,
      "default_branch": "master"
    },
    {
      "name": "Automation",
      "html_url": "https://github.com/aritra1999/Automation",
      "description": "Automate git commands for a faster, smoother experience.",
      "created_at": new Date("2020-06-04T06:44:00Z"),
      "pushed_at": new Date("2020-06-09T03:52:12Z"),
      "ssh_url": "git@github.com:aritra1999/Automation.git",
      "clone_url": "https://github.com/aritra1999/Automation.git",
      "homepage": null,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "Python",
      "forks_count": 0,
      "default_branch": "master"
  }];
  gistResponse: Gist[] = [
    {
      "url": "https://api.github.com/gists/93ce64354d2152e3f934fe8f9f675e48",
      "files": {
        "filename": "Create New Project | Electron",
        "type": "text/plain",
        "language": "Python",
        "raw_url": "https://gist.githubusercontent.com/aritra1999/93ce64354d2152e3f934fe8f9f675e48/raw/befb8656873880e55a0c0f6bd4f0663ddf9c60f8/Create%20New%20Project%20%7C%20Electron",
        "size": 30
      },
      "created_at": new Date("2020-06-07T05:47:43Z"),
      "updated_at": new Date("2020-06-07T05:47:44Z"),
      "comments": 0,
      "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "owner": {
        "login": "aritra1999",
        "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
        "html_url": "https://github.com/aritra1999",
      },
      "language": null
    },
    {
      "url": "https://api.github.com/gists/93ce64354d2152e3f934fe8f9f675e48",
      "files": {
        "filename": "Create New Project | Electron",
        "type": "text/plain",
        "language": "Python",
        "raw_url": "https://gist.githubusercontent.com/aritra1999/93ce64354d2152e3f934fe8f9f675e48/raw/befb8656873880e55a0c0f6bd4f0663ddf9c60f8/Create%20New%20Project%20%7C%20Electron",
        "size": 30
      },
      "created_at": new Date("2020-06-07T05:47:43Z"),
      "updated_at": new Date("2020-06-07T05:47:44Z"),
      "comments": 0,
      "description": "",
      "owner": {
        "login": "aritra1999",
        "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
        "html_url": "https://github.com/aritra1999",
      },
      "language": null
    },
    {
      "url": "https://api.github.com/gists/93ce64354d2152e3f934fe8f9f675e48",
      "files": {
        "filename": "Create New Project | Electron",
        "type": "text/plain",
        "language": "Python",
        "raw_url": "https://gist.githubusercontent.com/aritra1999/93ce64354d2152e3f934fe8f9f675e48/raw/befb8656873880e55a0c0f6bd4f0663ddf9c60f8/Create%20New%20Project%20%7C%20Electron",
        "size": 30
      },
      "created_at": new Date("2020-06-07T05:47:43Z"),
      "updated_at": new Date("2020-06-07T05:47:44Z"),
      "comments": 0,
      "description": "",
      "owner": {
        "login": "aritra1999",
        "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
        "html_url": "https://github.com/aritra1999",
      },
      "language": null
    },
    {
      "url": "https://api.github.com/gists/93ce64354d2152e3f934fe8f9f675e48",
      "files": {
        "filename": "Create New Project | Electron",
        "type": "text/plain",
        "language": "Python",
        "raw_url": "https://gist.githubusercontent.com/aritra1999/93ce64354d2152e3f934fe8f9f675e48/raw/befb8656873880e55a0c0f6bd4f0663ddf9c60f8/Create%20New%20Project%20%7C%20Electron",
        "size": 30
      },
      "created_at": new Date("2020-06-07T05:47:43Z"),
      "updated_at": new Date("2020-06-07T05:47:44Z"),
      "comments": 0,
      "description": "",
      "owner": {
        "login": "aritra1999",
        "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
        "html_url": "https://github.com/aritra1999",
      },
      "language": null
    },
    {
      "url": "https://api.github.com/gists/ac5bdcbd5204cdd76b5745c67cecdfaa",
      "files": {
        "filename": "Run | Video OCR using Tesseract",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/aritra1999/ac5bdcbd5204cdd76b5745c67cecdfaa/raw/143e34d6aa72ac91cbedac52d87f6ea9a8bad3e5/Run%20%7C%20Video%20OCR%20using%20Tesseract",
        "size": 48
      },
      "created_at": new Date("2020-02-11T09:27:50Z"),
      "updated_at": new Date("2020-02-11T14:48:45Z"),
      "comments": 69,
      "description": "",
      "owner": {
        "login": "aritra1999",
        "avatar_url": "https://avatars.githubusercontent.com/u/30624056?v=4",
        "html_url": "https://github.com/aritra1999",
      },
      "language": null
    }
  ];
  followResponse: Owner[] = [
    {
      "login": "Soldy",
      "avatar_url": "https://avatars.githubusercontent.com/u/4786022?v=4",
      "html_url": "https://github.com/Soldy",
    },
    {
      "login": "hrishavjha",
      "avatar_url": "https://avatars.githubusercontent.com/u/13471333?v=4",
      "html_url": "https://github.com/hrishavjha",
    },
    {
      "login": "Artistic18",
      "avatar_url": "https://avatars.githubusercontent.com/u/16490253?v=4",
      "html_url": "https://github.com/Artistic18",
    },
    {
      "login": "shell-nightmare",
      "avatar_url": "https://avatars.githubusercontent.com/u/20427105?v=4",
      "html_url": "https://github.com/shell-nightmare",
    }
  ]

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getUserDetails(username: string): Observable<User> {
    // return of(this.userResponse);
    return this.httpClient.get<User>(`${this.BASE_URL}/users/${username}`).pipe(
      catchError((err) => {
        console.log('Error caught in user service!');
        this.router.navigate(['/']);
        return throwError(err);
      })
    );
  }

  public getRepos(username: string): Observable<Repo[]> { 
    // return of(this.repoResponse);
    return this.httpClient.get<Repo[]>(`${this.BASE_URL}/users/${username}/repos`).pipe(
      catchError((err) => {
        console.log('Error caught in repository service!');
        this.router.navigate(['/']);
        return throwError(err);
      })
    );
  }
  public getGistFile(url: string) {
    return this.httpClient.get(url);
  }
  
  public getGists(username: string): Observable<Gist[]> {
    // return of(this.gistResponse);
    return this.httpClient.get<Gist[]>(`${this.BASE_URL}/users/${username}/gists`).pipe(
      concatMap((gists) => {
        gists.map((gist: Gist) => gist.files = Object.values(gist.files)[0] );
        return of(gists);
      }),
      catchError((err: any) => {
        console.log('Error caught in gist service!');
        this.router.navigate(['/']);
        return throwError(err);
      })
    );
  }

  public getFollowers(username: string): Observable<Owner[]> {
    // return of(this.followResponse);
    return this.httpClient.get<Owner[]>(`${this.BASE_URL}/users/${username}/followers`).pipe(
      catchError((err) => {
        console.log('Error caught in followers service!');
        this.router.navigate(['/']);
        return throwError(err);
      })
    );
  }

  public getFollowings(username: string): Observable<Owner[]> {
    // return of(this.followResponse);
    return this.httpClient.get<Owner[]>(`${this.BASE_URL}/users/${username}/following`).pipe(
      catchError((err) => {
        console.log('Error caught in following service!');
        this.router.navigate(['/']);
        return throwError(err);
      })
    );
  }
}
