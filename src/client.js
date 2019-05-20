import ApolloClient from "apollo-boost";

const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      },
    });
  }
});

export default client;
