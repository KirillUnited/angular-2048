import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  theme;
  users = [];
  searchStr = '';
  constructor(private usersService: UsersService) { }
  ngOnInit() {
    // this.users = this.usersService.users;
    this.usersService.getUsers().subscribe(users =>
      this.users = users
    )
  }
  onChange() {
    if (this.theme == null) {
      this.theme = 'bg_theme_dark';
    } else {
      this.theme = null;
    }
  }
}
