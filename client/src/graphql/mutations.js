import gql from 'graphql-tag';

export const CREATE_MENU_ITEM = gql`
mutation createMenuItem($data: MenuItemCreateInput!){
  createMenuItem(data: $data){
    name
  	id
  }
}
`;

export const UPDATE_MENU_ITEM= gql`
mutation updateMenuItem($data: MenuItemUpdateInput!, $id: ID!){
  updateMenuItem(data: $data, where: {
    id: $id
  }){
    name
    id
  }
}
`;

export const DELETE_MENU_ITEM = gql`
mutation deleteMenuItem($id: ID!){
  deleteMenuItem(where: {
    id: $id
  }){
    name
    id
  }
}
`;
