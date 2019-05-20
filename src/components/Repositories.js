import React, { Component } from "react";
import { Query } from "react-apollo/index";

import { reposQuery } from '../queries';
import DisplayRepositories from "./DisplayRepositories";

class Repositories extends Component {
  handleMore = (data, fetchMore, current) => {
    fetchMore({
      variables: { first: current + 10 },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if(!fetchMoreResult) {
          return previousQueryResult;
        }
        return Object.assign(previousQueryResult, fetchMoreResult);
      }
    })
  };
  render() {
    return (
      <Query query={ reposQuery } variables={{ first: 10 }}>
        {({ data, loading, error, fetchMore, refetch }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;

          let current = data.viewer.repositories.edges.length;

          return (
            <DisplayRepositories
              current={current}
              refetch={refetch}
              data={data}
              handleMore={() => this.handleMore(data, fetchMore, current)}
            />
          );
        }}
      </Query>
    );
  }
}

export default Repositories;
