import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: string = "light";

  constructor() { 
    const tempTheme = localStorage.getItem("theme");
    if(tempTheme) this.setTheme(tempTheme);
  }
  
  toggleTheme() {
    this.setTheme(this.theme == "light" ? "dark" : "light");
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
    this.theme = theme;
  }

  ngOnInit(): void {}

}
