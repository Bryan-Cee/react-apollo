import React from "react";
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import AddStar from "../components/AddStar";
import {MockedProvider} from "react-apollo/test-utils";
import {ADD_STAR} from "../queries";

describe('AddStar Component', () => {
  const ADD_STAR_RESULT = {
    data: {
      addStar: {
        starrable: {
          stargazers: {
            totalCount: 2
          },
          viewerHasStarred: true
        }
      }
    }
  };

  const mocks = [
    {
      request: {
        query: ADD_STAR,
        variables: { repoId: `mocked string` },
      },
      result: ADD_STAR_RESULT,
    },
  ];

  it.skip('should render without crashing', function () {
    renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <AddStar/>
      </MockedProvider>
    )
  });

  it.only('should have a loading state when add star button is clicked',async function () {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AddStar/>
      </MockedProvider>
    );

    const button = wrapper.find('button');
    button.simulate('click');

    await wrapper.update();

    const p = wrapper.find('p');
    expect(p.text()).toContain('Loading...');
  });
});
