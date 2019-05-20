import React, {Component} from 'react';
import {Mutation} from "react-apollo";

import '../styles/addStar.css'
import {ADD_STAR} from "../queries";

class AddStar extends Component {
  render() {
    return (
      <Mutation mutation={ADD_STAR} >
        {(addStar, { data, loading, error }) => {
          return(
            <div className="addActionButton">
              <button
                onClick={()=>{
                  addStar({ variables: { repoId: this.props.id } }).then(
                    response => {
                      this.props.refetch();
                      console.log(response);
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
