import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  siteTitle: string = 'My Angular App';
  isLoggedIn: boolean = false;



  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
