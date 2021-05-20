import gql from "graphql-tag";

// eslint-disable-next-line import/prefer-default-export
export const GET_USER_DATA = gql`
  query userData($userEmail: String!) {
    userData(userEmail: $userEmail) {
      // Data to get
    }
  }
`;
