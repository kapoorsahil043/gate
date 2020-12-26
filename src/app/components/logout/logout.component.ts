import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var window: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent 
implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
    this.authService.logOut();
    //this.router.navigate(["login", {}], { skipLocationChange: true });
    setTimeout(function () {
      window.location.reload();
    }, 500);
  }

}
