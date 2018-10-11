import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { stringify } from '@angular/compiler/src/util';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})

export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'https://hasura-angular.herokuapp.com/v1alpha1/graphql';

    const authHeader = new HttpHeaders()
    .set('X-Hasura-Access-Key', 'something_secret')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    .set('X-Hasura-Role', 'user')
    .set('X-Hasura-User-Id', stringify(localStorage.getItem('user_id')));

    console.log(localStorage.getItem('user_id'));
    const http = httpLink.create({ uri, headers: authHeader });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
