import gql from 'graphql-tag';

export const MENUITEMS = gql`
query getMenuItems{
  menuItems{
    name
    formattedPrice
    description
    catagory
    id
  }
}`;

export const ENTREES = gql`
query getEntrees{
  menuItems(where: {
    catagory: "Entree"
  }) {
    name
    description
    id
    catagory
  }
}`;

export const APPETIZERS = gql`
query getAppetizers{
  menuItems(where: {
    catagory: "Appetizer"
  }) {
    name
    description
    id
    catagory
  }
}`;

export const DESSERT = gql`
query getDesserts{
  menuItems(where: {
    catagory: "Dessert"
  }) {
    name
    description
    id
    catagory
  }
}`;