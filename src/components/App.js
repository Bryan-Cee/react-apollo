import React from 'react';
import { Query } from 'react-apollo';

import { GET_USER } from '../queries';
import '../styles/App.css';
import Repositories from "./Repositories";

function App() {
  return (
    <div className="App">
      <Query query={ GET_USER }>
        {({ data, error, loading }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <div className=''>
              <h2>Name: <span>{data.viewer.name}</span></h2>
              <p>Email: <span>{data.viewer.email}</span></p>
            </div>
          );
        }}
      </Query>
      <Repositories/>
    </div>
  );
}

export default App;
