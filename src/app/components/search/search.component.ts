import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seach',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SeachComponent implements OnInit {

  public userForm:FormGroup; 
  searchUsername: string = "";
  
  constructor(private form: FormBuilder, private router: Router) {
    this.userForm = this.form.group({
      searchUsername: ''
    });
  }

  ngOnInit(): void {
  }

  searchUser() {
  //  this.router.navigate([`/${this.userForm.get('searchUsername')?.value}`]);
    window.open(`/${this.userForm.get('searchUsername')?.value}`, '_blank');
  }
}
