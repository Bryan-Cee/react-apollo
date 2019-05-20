import { gql } from "apollo-boost/lib/index";

export const userQuery = gql`
  query GetNameAndEmail{
    viewer {
      name
      email
    }
  }
`;

export const reposQuery = gql`
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

export const addStarQuery = gql`
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

export const removeStarQuery = gql`
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
