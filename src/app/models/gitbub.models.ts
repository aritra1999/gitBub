export interface Repo {
    description: string | null; 
    name: string
    default_branch: string;
    language: string; 
    html_url: string;
    clone_url: string; 
    ssh_url: string; 
    stargazers_count: number;
    watchers_count: number;
    homepage: string | null;
    forks_count: number;
    created_at: Date;
    pushed_at: Date;
}

export interface Owner {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface User {
    login: string; 
    name: string; 
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    location: string;
    bio: string | null;
    blog: string | null;
    twitter_username: string | null; 
    company: string | null;
    email: string | null; 
    public_repos: number; 
    public_gists: number; 
    created_at: Date | null; 
}

export interface Gist { 
    url: string;
    description: string | null;
    files: ReponseFile | AppFile; 
    language: string | null; 
    comments: number;
    owner: Owner;
    created_at: Date;
    updated_at: Date;
}

export interface ReponseFile {
    [key: string]: AppFile;
}

export interface AppFile {
    filename: string;
    type: string;
    language: string | null;
    raw_url: string;
    size: number;
}