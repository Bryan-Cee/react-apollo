import React, {Component} from 'react';
import {Mutation} from "react-apollo";

import '../styles/addStar.css'
import {addStarQuery} from "../queries";

class AddStar extends Component {
  render() {
    return (
      <Mutation mutation={addStarQuery} >
        {(addStar, { data, loading, error }) => {
          return(
            <div className="addActionButton">
              <button
                onClick={()=>{
                  addStar({ variables: { repoId: this.props.id } }).then(
                    response => {
                      this.props.refetch();
                    }
                  );
                }}
              >{" "} Add Star</button>

              {loading && <p>Loading...</p>}
              {error && <p>{error.message}</p>}
            </div>
          )
        }}
      </Mutation>
    );
  }
}

export default AddStar;
