import gql from 'graphql-tag';

const CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        status
        gender
        species
      }
    }
  }
`;
