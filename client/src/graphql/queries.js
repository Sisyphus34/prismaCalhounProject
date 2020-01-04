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
}
`;