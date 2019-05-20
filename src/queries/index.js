import { gql } from "apollo-boost";

export const GET_USER = gql`
  query GetNameAndEmail{
    viewer {
      name
      email
    }
  }
`;

export const GET_REPOS = gql`
  query Repositories($first: Int!){
    viewer {
      repositories(first: $first) {
        edges {
          node {
            id
            name
            stargazers{
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
  mutation AddStar($repoId: ID!) {
    addStar(input: { starrableId: $repoId }) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation RemoveStar($repoId: ID!) {
    removeStar(input: { starrableId: $repoId}) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;
