import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {MockedProvider} from "react-apollo/test-utils";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider>
      <App />
    </MockedProvider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
