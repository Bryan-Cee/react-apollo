import React, { Component } from 'react';
import { Mutation } from "react-apollo";

import '../styles/removeStar.css';
import { removeStarQuery } from "../queries";

class RemoveStar extends Component {
  render() {
    return (
      <Mutation mutation={removeStarQuery}>
        {(removeStar, { data, loading, error }) => {
          return (
            <div className="removeActionButton">
              <button
                onClick={() => {
                  removeStar({ variables: { repoId: this.props.id } })
                  .then(response => {
                    this.props.refetch();
                    console.log(response)
                  })
                }}
              >
                {" "}
                Remove Star
              </button>
              {(loading && !data) && <p>Processing...</p>}
              {error && <p>{error.message}</p>}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default RemoveStar;
