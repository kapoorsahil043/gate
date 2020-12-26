import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from 'src/app/data-model/User';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'src/app/services/toastr.service';
declare var window: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private authService:AuthService,private toastrService:ToastrService) {}
  user:User = new User;

  ngOnInit() {
    window.uniqueDeviceId = 'uniqueDeviceId';
  }

  goToItem() {
    this.authService.login(this.user);
    this.toastrService.success('Login Success');
    this.router.navigate(["dashboard", {}], { skipLocationChange: true });
    console.log(<any>window.startCheckingTimeOut(10))
    console.log(<any>window.startIdleTimeout())
  }
}
