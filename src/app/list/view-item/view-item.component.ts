import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import * as Query from '../../queries';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  todoItems: Observable<any>;
  noItemsInList = false;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: Query.PostsGetQuery
    })
      .valueChanges
      .subscribe(({ data }) => {
        if (data.todo_list.length === 0) {
          this.noItemsInList = true;
        } else {
          this.noItemsInList = false;
          this.todoItems = data.todo_list;
        }
      });
  }
}
