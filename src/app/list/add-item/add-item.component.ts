import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import * as Query from '../../queries';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  someString = '';

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  addItemInDB() {
    this.apollo.mutate<any>({
      mutation: Query.AddMutation,
      variables: {
        'objects': [
          {
            'text': this.someString,
            'user': localStorage.getItem('user_id')
          }
        ]
      }
    }).subscribe(({ data }) => {
      location.reload();
    }, (error) => {
      console.log('Could not add due to ' + error);
    });
  }
}
