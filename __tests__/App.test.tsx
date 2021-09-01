/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

let wrapper: any;

beforeEach(() => {
  wrapper = renderer.create(
    <App />,
  );
})

test('renders correctly', () => {
  const tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});
