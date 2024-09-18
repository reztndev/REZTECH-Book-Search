import { gql } from '@apollo/client';

// Defines the GET_ME query to fetch the current user's data
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;

