import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { PARAMETERS } from "@angular/core/src/util/decorators";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  users: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.users = params.id));
  }
  ngOnInit() {
    this.data.getUser(this.users).subscribe((data) => (this.users = data));
    localStorage.setItem("userId", this.users.toString());
  }
}
