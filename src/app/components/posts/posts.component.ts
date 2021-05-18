import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { userInfo } from "os";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts$: object;

  constructor(private data: DataService) {}

  ngOnInit() {
    if (!localStorage.getItem("userId"))
      this.data.getPosts().subscribe((data) => (this.posts$ = data));
    else
      this.data
        .getPostsUser(localStorage.getItem("userId"))
        .subscribe((data) => (this.posts$ = data));
  }
}
