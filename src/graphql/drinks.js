import gql from "graphql-tag";

export const DRINKS_QUERY = gql`
  query {
    beers
      @rest(
        type: "Beer",
        path: "beers",
        method: "GET",
        endpoint: "beers"
      ) { name, id }
  }
`;
