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
  todoItems: Observable<Array<any>>;
  noItemsInList = false;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: Query.GetQuery
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

  updateTodoItem(id, isCompleted) {
    this.apollo.mutate<any>({
      mutation: Query.UpdateMutation,
      variables: {
        'where': {
          'id': {
            '_eq': id
          }
        },
        'set':
        {
          'is_completed': !isCompleted
        }
      }
    }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('Could not add due to ' + error);
    });
  }

  deleteTodoItem(id) {
    this.apollo.mutate<any>({
      mutation: Query.DeleteMutation,
      variables: {
        'where': {
          'id': {
            '_eq': id
          }
        }
      }
    }).subscribe(({ data }) => {
      console.log(this.todoItems, data);
      this.todoItems = this.todoItems.filter((item) => item.id !== data.delete_todo_list.returning[0].id)
    }, (error) => {
      console.log('Could not add due to ' + error);
    });
  }
}
