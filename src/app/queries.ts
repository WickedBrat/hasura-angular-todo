import gql from 'graphql-tag';

export const GetQuery = gql`
query PostsGetQuery{
  todo_list {
      id
      text
      is_completed
    }
}`;

export const AddMutation = gql`
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

export const UpdateMutation = gql `
mutation updateMutation($where: todo_list_bool_exp!, $set: todo_list_set_input!) {
    update_todo_list(
      where: $where,
      _set: $set
    ) {
      affected_rows
      returning {
        id
        is_completed
        text
      }
    }
  }`;

  export const DeleteMutation = gql `
  mutation DeleteMutation($where: todo_list_bool_exp!) {
      delete_todo_list(
        where: $where
      ) {
        affected_rows
        returning {
          id
        }
      }
    }`;
