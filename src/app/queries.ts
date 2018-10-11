import gql from 'graphql-tag';

export const PostsGetQuery = gql`
query PostsGetQuery{
  todo_list {
      text
      is_completed
    }
}`;

export const AddQuery = gql`
    mutation insert_todo_list($objects: [todo_list_insert_input!]! ) {
        insert_todo_list(objects: $objects) {
          returning {
            id
            text
            is_completed
            user
          }
        }
      }
`;
