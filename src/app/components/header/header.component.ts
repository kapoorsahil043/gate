import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data-model/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user:User) => this.currentUser = user);
  }

}
