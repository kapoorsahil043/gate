import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToItem(url: string) {
    console.log("url:", url, "current url:", this.router.url);
    if (this.router.url && this.router.url !== "/dashboard/" + url)
      console.log("navigate");
    this.router.navigate(["dashboard", url, {}], {
      skipLocationChange: false,
    });
  }
}
